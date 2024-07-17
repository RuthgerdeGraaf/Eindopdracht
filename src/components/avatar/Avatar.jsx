import React, { useState, useEffect } from 'react';
import { getAvatar } from '../../api/userApi';
import { useUser } from '../../context/UserContext';

const Avatar = ({ className }) => {
  const { username } = useUser();
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const url = await getAvatar(username);
        // Assuming getAvatar returns a response that could be empty or invalid
        // Check if the URL is not empty before setting it
        if (url) {
          setAvatarUrl(url);
        } else {
          console.error('Received empty or invalid URL for avatar');
          // Optionally, set a default or error avatar URL here
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
    <div>
      <img src={avatarUrl || avatarPlaceholder} alt="Avatar" className={className} />
    </div>
  );
};

export default Avatar;