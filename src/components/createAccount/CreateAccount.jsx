import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleAvatarChange = (e) => {
        setAvatar(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const avatarPlaceholder = 'https://kritterkommunity.com/wp-content/uploads/2024/05/IMG_2578.webp'; 
    
    return (
        <div className="create-account-page">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Email'
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Password'
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder='Username'
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={avatar}
                        onChange={handleAvatarChange}
                        placeholder='Avatar URL or upload image'
                        required
                    />
                </div>
                <div>
                    <img src={avatar || avatarPlaceholder} alt="Avatar Preview" style={{ maxWidth: '150px', maxHeight: '150px', marginTop: '10px' }} /> 
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;
