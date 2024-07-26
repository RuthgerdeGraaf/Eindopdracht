import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        isLoggedIn: false,
        username: '',
        email: '',
        info: '',
        status: 'pending',
    });

    const [needsUpdate, toggleNeedsUpdate] = useState(true)

    const data = {
        ...authState,
        login,
        logout,
        toggleNeedsUpdate,
    };

    async function getUserData(decodedToken, storedToken, setAuthState, setStatusCode) {
        try {
            let response;
            if (decodedToken) {
                response = await axios.get(`https://api.datavortex.nl/whattoplay/users/${decodedToken.sub}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${storedToken}`,
                    }
                })
            };
            if (response) {
                setAuthState({
                    isLoggedIn: true,
                    username: response.data.username,
                    email: response.data.email,
                    info: response.data.info,
                    status: 'done',
                });
                setStatusCode && setStatusCode(response.status);
            };
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (needsUpdate) {
            const storedToken = localStorage.getItem('token');
            let decodedStoredToken;
            if (storedToken) {
                decodedStoredToken = jwtDecode(storedToken);
            }
            storedToken && getUserData(decodedStoredToken, storedToken, setAuthState);
        }
        toggleNeedsUpdate(false);
    }, [needsUpdate]);

    async function login(formState, setStatusCode) {
        try {
            const response = await axios.post('https://api.datavortex.nl/whattoplay/users/authenticate', {
                'username': formState.username,
                'password': formState.password,
            });
            localStorage.setItem('token', response.data.jwt);
            const decodedToken = jwtDecode(response.data.jwt);
            getUserData(decodedToken, response.data.jwt, setAuthState, setStatusCode);
        } catch (error) {
            setAuthState({
                isLoggedIn: false,
                username: '',
                email: '',
                info: '',
                status: 'done',
            });
            setStatusCode('error');
            console.error(error);
        }
    }

    function logout() {
        localStorage.clear();
        setAuthState({
            isLoggedIn: false,
            username: '',
            email: '',
            info: '',
            status: 'pending',
        });
        setStatusCode('');
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;