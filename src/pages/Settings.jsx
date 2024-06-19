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
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Settings;