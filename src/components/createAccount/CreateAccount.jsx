import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, uploadAvatar } from '../../api/userApi';
import { useDropzone } from 'react-dropzone';
import './CreateAccount.scss';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [avatarFile, setAvatarFile] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);

    const onDrop = (acceptedFiles) => {
        setAvatarFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const userData = { email, password, username, avatar: '' };
            const userResult = await createUser(userData);

            if (avatarFile) {
                await uploadAvatar(username, avatarFile);
            }

            console.log('User created:', userResult);
            navigate('/login');
        } catch (error) {
            setError(error.message);
            console.error('Error creating user:', error);
        }
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
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop avatar file here, or click to select file</p>
                </div>
                <div>
                    {avatarFile ? (
                        <img src={URL.createObjectURL(avatarFile)} alt="Avatar Preview" style={{ maxWidth: '150px', maxHeight: '150px', marginTop: '10px' }} />
                    ) : (
                        <img src={avatarPlaceholder} alt="Avatar Preview" style={{ maxWidth: '150px', maxHeight: '150px', marginTop: '10px' }} />
                    )}
                </div>
                <button type="submit">Create Account</button>
                {error && <p className="error">Your password must contain:
                    <ul className='list'>
                        <li>At least 1 capital letter</li>
                        <li>A number</li>
                        <li>At least 8 characters</li>
                        <li>At least 1 special character</li>
                    </ul>
                </p>}
            </form>
        </div>
    );
};

export default CreateAccount;
