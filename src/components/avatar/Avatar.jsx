import React, { useState, useEffect } from 'react';

const Avatar = () => {
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        // Fetch the latest uploaded avatar URL from the server
        const fetchAvatar = async () => {
            try {
                const response = await fetch('/api/avatar/latest');
                const data = await response.json();
                setAvatarUrl(data.url);
            } catch (error) {
                console.error('Error fetching avatar:', error);
            }
        };

        fetchAvatar();
    }, []);

    return (
        <div>
            <img src={avatarUrl} alt="Avatar" />
        </div>
    );
};

export default Avatar;