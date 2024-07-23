import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Form from '../../components/form/Form.jsx';
import validateForm from '../../helpers/validateForm';
import createUser from '../../helpers/createUser';

import './Login.scss';

const Login = () => {
    const [activeTab, toggleActiveTab] = useState(true);
    const [errorMessages, setErrorMessages] = useState({});
    const [statusCode, setStatusCode] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        info: ''
    });

    const { login } = useContext(AuthContext);

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value;
        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleClick(e, form) {
        e.preventDefault();
        const errors = validateForm(formState, form);
        setErrorMessages(errors);
        if (activeTab) {
            login(formState, setStatusCode);
        } else if (Object.keys(errors).length === 0) {
            createUser(formState, setStatusCode);
        }
    }

    useEffect(() => {
        switch (statusCode) {
            case '':
                setStatusMessage('');
                break;
            case 200:
                activeTab ?
                    setStatusMessage('Login successful')
                    :
                    setStatusMessage('Registration successful');
                break;
            case 'error':
                activeTab ?
                    setStatusMessage('Login failed')
                    :
                    setStatusMessage('Registration failed');
                break;
        }
    }, [activeTab, statusCode]);

    useEffect(() => {
        setFormState({
            username: '',
            email: '',
            password: '',
            info: '',
        });
        setStatusCode('');
        setErrorMessages({});
    }, [activeTab]);

    return (
        <main>
            <header>
                <h2>
                    Login/registration
                </h2>
            </header>
            <div className='tabs-container'>
                <div className='tab-button-container'>
                    <button
                        type='button'
                        className='tab-button'
                        onClick={() => { toggleActiveTab(true) }}
                    >
                        I have an account
                    </button>
                    <button
                        type='button'
                        className='tab-button'
                        onClick={() => { toggleActiveTab(false) }}
                    >
                        I am a new customer
                    </button>
                </div>
                {
                    activeTab ?
                        <Form
                            form='login'
                            formState={formState}
                            handleChange={handleChange}
                            handleClick={handleClick}
                            errorMessages={errorMessages}
                            statusCode={statusCode}
                            statusMessage={statusMessage}
                        />
                        :
                        <Form
                            form='registration'
                            formState={formState}
                            handleChange={handleChange}
                            handleClick={handleClick}
                            errorMessages={errorMessages}
                            statusCode={statusCode}
                            statusMessage={statusMessage}
                        />
                }
            </div>
        </main>
    );
}

export default Login;
