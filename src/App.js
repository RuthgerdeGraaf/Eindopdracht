import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Login from "./pages/login/Login.jsx";
import Home from "../src/pages/home/Home";
import Favorite from "./pages/favorite/Favorite.jsx";
import Collection from "./pages/collection/Collection.jsx";
import Settings from "./pages/settings/Settings.jsx";
import PlayStationPage from "../src/pages/playstation/PlaystationPage.jsx";
import QuestionPage from "./pages/questionPage/QuestionPage.jsx";
import ResultPage from "./pages/resultPage/ResultPage.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [answers, setAnswers] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  const location = useLocation();
  const showHeader = location.pathname !== "/";

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {showHeader && (
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      )}
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/playstation" element={<PlayStationPage />} />
          <Route
            path="/quiz"
            element={
              <QuestionPage handleAnswer={handleAnswer} answers={answers} />
            }
          />
          <Route path="/result" element={<ResultPage answers={answers} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
