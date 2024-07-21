import React, { useState, useEffect } from 'react';
import { getAvatar } from '../../api/userApi';
import { useUser } from '../../context/UserContext';
import './Avatar.scss';

const Avatar = ({ className }) => {
  const { username } = useUser();
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const url = await getAvatar(username);
        if (url) {
          setAvatarUrl(url);
        } else {
          console.error('Received empty or invalid URL for avatar');
        }
      } catch (error) {
        console.error('Error fetching avatar:', error);
      }
    };

    if (username) {
      fetchAvatar();
    }
  }, [username]);

  const avatarPlaceholder = 'https://kritterkommunity.com/wp-content/uploads/2024/05/IMG_2578.webp';

  return (
    <div className={`avatar ${className}`}>
      <img 
        src={avatarUrl || avatarPlaceholder} 
        alt="Avatar" 
      />
    </div>
  );
};

export default Avatar;
