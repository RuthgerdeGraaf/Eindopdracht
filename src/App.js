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
import QuestionPage from "./pages/questionPage/QuestionPage.jsx";
import ResultPage from "./pages/resultPage/ResultPage.jsx";
import { AnswerProvider, AnswerContext } from "./context/AnswerContext";
import Everything from "./pages/everything/Everything.jsx";
import GameDetail from "./pages/gameDetail/GameDetail.jsx";
import MobilePage from "./pages/mobilePage/MobilePage.jsx";
import { UserProvider } from "./context/UserContext"; // Voeg deze import toe
import { FavoriteProvider } from "./context/FavoriteContext"; // Voeg deze import toe
import { CollectionProvider } from "./context/CollectionContext"; // Voeg deze import toe

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
            <Route path="/quiz" element={<QuestionPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/everything" element={<Everything />} />
            <Route path="/game/:id" component={GameDetail} />
            <Route path="/mobile" element={<MobilePage />} />
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
      <FavoriteProvider>
        <CollectionProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CollectionProvider>
      </FavoriteProvider>
    </AnswerProvider>
  </Router>
);

export default AppWrapper;
