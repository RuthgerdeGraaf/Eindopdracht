import React from 'react';
import { useAuth } from '../../context/AuthContext.jsx';

const Users = () => {
    const { logout } = useAuth();

    return (
        <div>
            <h2>Users Page</h2>
            <p>This page is only visible to admin users.</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Users;
