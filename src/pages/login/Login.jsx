import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import w2p from '../../img/What2Play.jpeg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('https://api.datavortex.nl/whattoplay/users/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'whattoplay:ooBH8YLepfnOLSLnHj41',
            },
            body: JSON.stringify({ username, password }),
        });

        const text = await response.text();
        console.log('Response status:', response.status);
        console.log('Response text:', text);

        if (!response.ok) {
            if (response.status === 403) {
                throw new Error('Access is forbidden. Please check your API key and user permissions.');
            }
            throw new Error('Login failed: ' + response.status);
        }

        let data;
        try {
            data = JSON.parse(text);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            console.log('Response text that caused parsing error:', text);
            throw new Error('Failed to parse response as JSON');
        }

        const token = data.token;
        if (!token) {
            console.error('Token not found in response:', data);
            throw new Error('Login failed: No token received.');
        }

        localStorage.setItem('token', token);

        navigate('/home');
    } catch (error) {
        console.error('Login error:', error);
        alert(error.message);
    }
};


    const isFormValid = username.trim() !== '' && password.trim() !== '';

    return (
        <div className="login-page">
            <img src={w2p} alt="What2Play Logo" className="login-logo" />
            <div className='login-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="small-input-field"
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder='Username'
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='small-input-field'
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='Password'
                            required
                        />
                    </div>
                    <button className="login-button" type="submit" disabled={!isFormValid}>
                        Login
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
                <blockquote className='blockquote'>
                    Don't have an account? <Link to="/create-account">Create one here</Link>
                </blockquote>
            </div>
        </div>
    );
};

export default Login;
