import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import w2p from '../../img/What2Play.jpeg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
            const response = await fetch('https://novi.datavortex.nl/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'whattoplay:ooBH8YLepfnOLSLnHj41',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            const token = data.token;

            // Opslaan van de token in localStorage
            localStorage.setItem('token', token);

            navigate('/home');
        } catch (error) {
            console.error('Login error:', error);
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
                    {isFormValid && (
                        <button className="login-button" type="submit"> <Link to="/home"></Link>Login</button>
                    )}
                </form>
                <blockquote className='blockquote'>Don't have an account? <Link to="/create-account">Create one here</Link></blockquote>
            </div>
        </div>
    );
};

export default Login;
