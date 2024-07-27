import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import trollFaceImage from '../../../src/assets/img/Nope.jpg';
import { Return } from '../../assets/icons/Icon.jsx';

// Styles
import './MobilePage.scss';


const MobilePage = () => {

    return (
        <>
            <div>
                <h1>Nope!</h1>
                <h2>A person playing a mobile game, should not call itself a gamer.</h2>
                <img
                    src={trollFaceImage}
                    className='trololo'
                    alt="Troll Face"
                />
            </div>
            <div>
                <button className='button-return'>
                    <Link to="/home">
                        <Return />
                    </Link>
                </button>
            </div>
        </>
    );
};

export default MobilePage;
