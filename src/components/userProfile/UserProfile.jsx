import ProfileItem from '../profileItem/ProfileItem';
import Button from '../button/Button';


const UserProfile = ({ statusCode, statusMessage, username, email, info, edit, toggleEdit }) => {
;

    return (
        <>
            {/* Status message */}
            {
                statusMessage &&
                <p className={`statusCode-${statusCode}`}>
                    {statusMessage}
                </p>
            }
            {/* User profile */}
            <article className='profile-container'>
                <header className='profile-title'>
                    <h3>
                        {username}
                    </h3>
                    <Button
                        type='button'
                        buttonText='Change your profile'
                        onClick={() => toggleEdit(!edit)}
                    />
                </header>
                <ProfileItem item={{ email }} />
                <ProfileItem item={{ info }} />
            </article>
        </>
    );
}

export default UserProfile;