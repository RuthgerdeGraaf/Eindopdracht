// Styles
import './Button.scss';

const Button = ({ type, buttonText, icon, onClick, id }) => {
    return (
        <button
            type={type}
            className='button'
            onClick={id ? () => onClick(id) : onClick}
        >
            {buttonText}
            {icon}
        </button>
    );
}

export default Button;