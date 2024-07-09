import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import './Login.scss';
import w2p from '../../img/What2Play.jpeg';

const Login = () => {
    const [username, setUsername] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            username,
            role: username === 'Ruthger' ? 'admin' : 'user',
        };
        login(userData);
        navigate('/home');
    };

    const isFormValid = username !== '' && password !== '';

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
                        <button className="login-button" type="submit">Login</button>
                    )}
                </form>
                <blockquote className='blockquote'>Don't have an account? <Link to="/create-account">Create one here</Link></blockquote>
            </div>
        </div>
    );
};

export default Login;
