import React, { useState, useContext } from 'react';
import './QuestionPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import computerImage from '../../assets/img/Computer.jpeg';
import playstationImage from '../../assets/img/Playstation.jpeg';
import xboxImage from '../../assets/img/Xbox.jpeg';
import nintendoImage from '../../assets/img/Switch.jpeg';
import mobileImage from '../../assets/img/Mobile.jpeg';
import everythingImage from '../../assets/img/Everything.jpeg';
import onePlayerImage from '../../assets/img/OnePlayer.jpeg';
import twoPlayerImage from '../../assets/img/TwoPlayers.jpeg';
import fourPlayerImage from '../../assets/img/FourPlayers.jpeg';
import onlineImage from '../../assets/img/Online.jpeg';
import offlineImage from '../../assets/img/Offline.jpeg';
import mysteryGameImage from '../../assets/img/MysteryGame.jpeg';
import hackSlashGameImage from '../../assets/img/HackSlashGame.jpg';
import racingGameImage from '../../assets/img/RacingGame.jpeg';
import shooterGameImage from '../../assets/img/ShooterGame.jpeg';
import adventureGameImage from '../../assets/img/AdventureGame.jpeg';
import partyGameImage from '../../assets/img/PartyGame.jpeg';
import payImage from '../../assets/img/PayForIt.jpeg';
import dontPayImage from '../../assets/img/DontPayForIt.jpeg';
import { Return } from '../../assets/icons/Icon.jsx';
import { AnswerContext } from '../../context/AnswerContext';

const initialQuestions = [
  {
    question: "Ready to play a game? Choose your platform:",
    options: [
      { src: playstationImage, alt: "Playstation", filter: { platforms: '18' } },
      { src: xboxImage, alt: "X Box", filter: { platforms: '1' } },
      { src: nintendoImage, alt: "Nintendo", filter: { platforms: '7' } },
      { src: computerImage, alt: "Computer", filter: { platforms: '4' } },
      { link: '/mobile', src: mobileImage, alt: "Mobile" },
      { link: '/everything', src: everythingImage, alt: "Everything" },
    ],
  },
  {
    question: "How many players will be playing?",
    options: [
      { src: onePlayerImage, alt: "One Player", filter: { tags: 'singleplayer' } },
      { src: twoPlayerImage, alt: "Two Players", filter: { tags: 'multiplayer' } },
    ],
  },
  {
    question: "Do you want to play online or offline?",
    options: [
      { src: onlineImage, alt: "Online", filter: { tags: 'online-multiplayer' } },
      { src: offlineImage, alt: "Offline", filter: { tags: 'offline' } },
    ],
  },
  {
    question: "What type of game do you want to play?",
    options: [
      { src: mysteryGameImage, alt: "Indie Game", filter: { genres: 'indie' } },
      { src: hackSlashGameImage, alt: "Fighting Game", filter: { genres: 'fighting' } },
      { src: racingGameImage, alt: "Racing Game", filter: { genres: 'racing' } },
      { src: shooterGameImage, alt: "Action Game", filter: { genres: 'action' } },
      { src: adventureGameImage, alt: "Adventure Game", filter: { genres: 'adventure' } },
      { src: partyGameImage, alt: "Family Game", filter: { genres: 'family' } },
    ],
  },
  {
    question: "Do you want to pay for the game?",
    options: [
      { src: payImage, alt: "Pay for it", filter: { price: 'paid' } },
      { src: dontPayImage, alt: "Don't pay for it", filter: { price: 'free' } },
    ],
  },
];

const specialSecondQuestionOptions = [
  { src: onePlayerImage, alt: "One Player", filter: { tags: 'singleplayer' } },
  { src: twoPlayerImage, alt: "Two Players", filter: { tags: 'multiplayer' } },
  { src: fourPlayerImage, alt: "Four Players", filter: { tags: 'multiplayer' } },
];

function QuestionPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(initialQuestions);
  const { answers, setAnswers, resetAnswers } = useContext(AnswerContext);
  const [message, setMessage] = useState('At any moment you can press this button, to get back to the start!');
  const navigate = useNavigate();

  const handleImageClick = (option) => {
    setAnswers(prevAnswers => [...prevAnswers, option.filter]);

    if (currentQuestion === 0 && option.src === nintendoImage) {
      const updatedQuestions = [...initialQuestions];
      updatedQuestions[1] = { ...initialQuestions[1], options: specialSecondQuestionOptions };
      setQuestions(updatedQuestions);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/resultPage');
    }
  };

  const handleButtonClick = () => {
    setCurrentQuestion(0);
    setQuestions(initialQuestions);
    resetAnswers();
    setMessage('You have reset the quiz. Ready to start again?');
    navigate('/home');
  };

  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      <div classname="questions">
        {questions[currentQuestion].options.map((option, index) => (
          option.link ? (
            <Link key={index} to={option.link}>
              <img
                src={option.src}
                alt={option.alt}
                className="round-image"
              />
            </Link>
          ) : (
            <img
              key={index}
              src={option.src}
              alt={option.alt}
              onClick={() => handleImageClick(option)}
              className="round-image"
            />
          )
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Gekozen antwoorden:</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {answers.map((answer, index) => (
            <img
              key={index}
              src={answer.src}
              alt={answer.alt}
              className="small-round-image"
            />
          ))}
        </div>
      </div>
      <h3>{message}</h3>
      <button className='button-return' onClick={handleButtonClick}>
        <Return />
      </button>
    </div>
  );
}

export default QuestionPage;
