import React, { useState, useEffect } from 'react';
import Avatar from '../../components/avatar/Avatar';
import { useUser } from '../../context/UserContext';
import { getUser, updateUser, uploadAvatar } from '../../api/userApi';

function Settings() {
    const { username, setUsername } = useUser();
    const [avatar, setAvatar] = useState(null);
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            if (username) {
                try {
                    const userData = await getUser(username);
                    setAvatar(userData.avatarUrl);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };
        fetchUserData();
    }, [username]);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (avatar) {
            await uploadAvatar(username, avatar);
        }
        const userData = { username, password };
        await updateUser(username, userData);
    };

    return (
        <div>
            <h1>Settings</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <Avatar className='avatar' />
                    <input type="file" id="avatar" onChange={handleAvatarChange} />
                </div>
                <div>
                    <label htmlFor="username">Change your username</label>
                    <input 
                        className='small-input-field'
                        placeholder="Username"
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="password">Change your password</label>
                    <input 
                        className='small-input-field'
                        placeholder="Password" 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={handlePasswordChange} />
                </div>
                <button className='submit-button' type="submit">Save</button>
            </form>
        </div>
    );
}

export default Settings;
