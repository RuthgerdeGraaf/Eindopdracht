import React, { useState } from 'react';
import './Login.scss';
import w2p from '../../img/What2Play.jpeg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const isFormValid = email !== '' && password !== '';

    return (
        <div className="login-page">
            <img src={w2p} alt="What2Play Logo" className="login-logo" />
            <div className='login-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="small-input-field"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder='Email'
                        />
                    </div>
                    <div>
                        <input
                            className='small-input-field'
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='Password'
                        />
                    </div>
                    {isFormValid && (
                <button className="login-button" type="submit">Press to enter</button>
             )}
                </form>
            </div>
        </div>
    );
};

export default Login;
