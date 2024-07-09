import React, { useState } from 'react';
import Avatar from '../../components/avatar/Avatar';
import { useUser } from '../../context/UserContext';

function Settings() {
  const { username, setUsername } = useUser();
  const [setAvatar] = useState(null);
  const [password, setPassword] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
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
            onChange={handlePasswordChange}  />
        </div>
        <button className='submit-button' type="submit">Save</button>
      </form>
    </div>
  );
}

export default Settings;
