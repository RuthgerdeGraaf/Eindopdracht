import { useState, useEffect, useContext, } from 'react';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

import { AuthContext } from '../../context/AuthContext';

import Form from '../../components/form/Form.jsx';
import UserProfile from '../../components/userProfile/UserProfile.jsx';

import validateForm from '../../helpers/validateForm';

import './Settings.scss';

const Settings = () => {
    const { username, email, password, info, toggleNeedsUpdate } = useContext(AuthContext);
    const [errorMessages, setErrorMessages] = useState({});
    const [statusCode, setStatusCode] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [edit, toggleEdit] = useState(false);
    const [formState, setFormState] = useState({
        username,
        email,
        password,
        info,
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value;
        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    const storedToken = localStorage.getItem('token');
    let decodedStoredToken;
    async function updateUserProfile() {
        try {
            if (storedToken) {
                decodedStoredToken = jwtDecode(storedToken);
            }
            const response = await axios.put(`https://api.datavortex.nl/whattoplay/users/${decodedStoredToken.sub}`, formState, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${storedToken}`,
                },
            });
            setStatusCode(response.status);
            toggleNeedsUpdate(true);
        } catch (error) {
            setStatusCode('error');
            console.error(error);
        }
    }

    function handleClick(e, form) {
        e.preventDefault();
        const errors = validateForm(formState, form);
        setErrorMessages(errors);
        if (e.target.textContent === 'Discard changes') {
            toggleEdit(!edit);
        } else if (Object.keys(errors).length === 0) {
            updateUserProfile();
            toggleEdit(!edit);
        }
    }

    useEffect(() => {
        switch (statusCode) {
            case '':
                setStatusMessage('');
                break;
            case 204:
                setStatusMessage('User profile updated');
                break;
            case 'error':
                setStatusMessage('User profile update failed');
                break;
        }
    }, [statusCode])

    return (
        <main>
            <header>
                <h2>
                    User profile
                </h2>
            </header>
            {
                edit ?
                    <Form
                        form='profile'
                        formState={formState}
                        handleChange={handleChange}
                        handleClick={handleClick}
                        errorMessages={errorMessages}
                        statusCode={statusCode}
                        statusMessage={statusMessage}
                    />
                    :
                    <UserProfile
                        statusCode={statusCode}
                        statusMessage={statusMessage}
                        username={username}
                        email={email}
                        info={info}
                        edit={edit}
                        toggleEdit={toggleEdit}
                    />
            }
        </main>
    );
}

export default Settings;