import React, { useState } from 'react';
import './QuestionPage.scss';
import { useNavigate } from 'react-router-dom';
import computerImage from '../../img/Computer.jpeg';
import playstationImage from '../../img/Playstation.jpeg';
import xboxImage from '../../img/Xbox.jpeg';
import nintendoImage from '../../img/Switch.jpeg';
import mobileImage from '../../img/Mobile.jpeg';
import everythingImage from '../../img/Everything.jpeg';
import onePlayerImage from '../../img/OnePlayer.jpeg';
import twoPlayerImage from '../../img/TwoPlayers.jpeg';
import fourPlayerImage from '../../img/FourPlayers.jpeg';
import onlineImage from '../../img/Online.jpeg';
import offlineImage from '../../img/Offline.jpeg';
import mysteryGameImage from '../../img/MysteryGame.jpeg';
import hackSlashGameImage from '../../img/HackSlashGame.jpg';
import racingGameImage from '../../img/RacingGame.jpeg';
import shooterGameImage from '../../img/ShooterGame.jpeg';
import adventureGameImage from '../../img/AdventureGame.jpeg';
import partyGameImage from '../../img/PartyGame.jpeg';
import payImage from '../../img/PayForIt.jpeg';
import dontPayImage from '../../img/DontPayForIt.jpeg';
import { Return } from '../../icons/Icon';

const initialQuestions = [
  {
    question: "Ready to play a game? Choose your platform:",
    options: [
      { src: playstationImage, alt: "Playstation" },
      { src: xboxImage, alt: "X Box" },
      { src: nintendoImage, alt: "Nintendo" },
      { src: computerImage, alt: "Computer" },
      { src: mobileImage, alt: "Mobile" },
      { src: everythingImage, alt: "Everything" },
    ],
  },
  {
    question: "How many players will be playing?",
    options: [
      { src: onePlayerImage, alt: "One Player" },
      { src: twoPlayerImage, alt: "Two Players" },
    ],
  },
  {
    question: "Do you want to play online or offline?",
    options: [
      { src: onlineImage, alt: "Online" },
      { src: offlineImage, alt: "Offline" },
    ],
  },
  {
    question: "What type of game do you want to play?",
    options: [
      { src: mysteryGameImage, alt: "Mystery Game" },
      { src: hackSlashGameImage, alt: "Hack & Slash Game"},
      { src: racingGameImage, alt: "Racing Game" },
      { src: shooterGameImage, alt: "Shooter Game" },
      { src: adventureGameImage, alt: "Adventure Game" },
      { src: partyGameImage, alt: "Party Game" },
    ],
  },
  {
    question: "Do you want to pay for the game?",
    options: [
      { src: payImage, alt: "Pay for it" },
      { src: dontPayImage, alt: "Don't pay for it" },
    ],
  },
];

const specialSecondQuestionOptions = [
  { src: onePlayerImage, alt: "One Player" },
  { src: twoPlayerImage, alt: "Two Players" },
  { src: fourPlayerImage, alt: "Four Players" },
];

function QuestionPage({ handleAnswer }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(initialQuestions);
  const [answers, setAnswers] = useState([]);
  const [message, setMessage] = useState('At any moment you can press this button, to get back to the start!');
  const navigate = useNavigate();

  const handleImageClick = (option) => {
    handleAnswer(option);
    setAnswers(prevAnswers => [...prevAnswers, option]);

    if (currentQuestion === 0) {
      const updatedQuestions = [...initialQuestions];
      if (option.src === nintendoImage) {
        updatedQuestions[1].options = specialSecondQuestionOptions;
      }
      setQuestions(updatedQuestions);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/result');
    }
  };

  const handleButtonClick = () => {
    setCurrentQuestion(0);
    setQuestions(initialQuestions);
    setAnswers([]);
    setMessage('You have reset the quiz. Ready to start again?');
    navigate('/home');
  };

  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {questions[currentQuestion].options.map((option, index) => (
          <img
            key={index}
            src={option.src}
            alt={option.alt}
            onClick={() => handleImageClick(option)}
            className="round-image"
          />
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
      <button className='return-button' onClick={handleButtonClick}>
        <Return />
      </button>
    </div>
  );
}

export default QuestionPage;
