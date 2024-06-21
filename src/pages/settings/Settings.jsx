import React, { useState } from 'react';

function Settings() {
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

    const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="avatar">Avatar:</label>
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
          <label htmlFor="password"  >Change your password</label>
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