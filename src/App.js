import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
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
import { AnswerProvider, AnswerContext } from "./context/AnswerContext";
import Everything from "./pages/everything/Everything.jsx";
import GameDetail from "./pages/gameDetail/GameDetail.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const location = useLocation();
  const showHeader = location.pathname !== "/";

  const { resetAnswers } = useContext(AnswerContext);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    resetAnswers();
    navigate("/home");
  };

  return (
    <>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        {showHeader && (
          <Header
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            onHomeClick={handleHomeClick}
          />
        )}
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/playstation" element={<PlayStationPage />} />
            <Route path="/quiz" element={<QuestionPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/everything" element={<Everything />} />
            <Route path="/game/:id" component={GameDetail} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <AnswerProvider>
      <App />
    </AnswerProvider>
  </Router>
);

export default AppWrapper;
