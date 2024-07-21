import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.scss';

const Login = () => {
    const { authenticate, loading, error, message, user } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authenticate(username, password);
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-page">
            <img src="/img/What2Play.jpeg" alt="What2Play Logo" className="login-logo" />
            <div className='login-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="small-input-field"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='small-input-field'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            required
                        />
                    </div>
                    <button className="login-button" type="submit" disabled={loading}>
                        Login
                    </button>
                    {error && <p className="error">{error}</p>}
                    {message && <p className="success">{message}</p>}
                </form>
                <blockquote className='blockquote'>
                    Don't have an account? <Link to="/create-account">Create one here</Link>
                </blockquote>
            </div>
        </div>
    );
};

export default Login;
