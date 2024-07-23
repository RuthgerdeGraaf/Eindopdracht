import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Favorite from "./pages/favorite/Favorite.jsx";
import Collection from "./pages/collection/Collection.jsx";
import Settings from "./pages/settings/Settings.jsx";
import QuestionPage from "./pages/questionPage/QuestionPage.jsx";
import ResultPage from "./pages/resultPage/ResultPage.jsx";
import { AnswerProvider, AnswerContext } from "./context/AnswerContext.jsx";
import Everything from "./pages/everything/Everything.jsx";
import GameDetail from "./pages/gameDetail/GameDetail.jsx";
import MobilePage from "./pages/mobilePage/MobilePage.jsx";
import { FavoriteProvider } from "./context/FavoriteContext.jsx";
import { CollectionProvider } from "./context/CollectionContext.jsx";
import { AuthContext } from "./context/AuthContext.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const showHeader = location.pathname !== "/";

  const { resetAnswers } = useContext(AnswerContext);

  const handleHomeClick = () => {
    resetAnswers();
    navigate("/home");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setAuthenticated(!!token);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {showHeader && authenticated && (
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onHomeClick={handleHomeClick}
        />
      )}
      <main className="App-main">
        <Routes>
          <Route
            path="/"
            element={authenticated ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          {authenticated && <Route path="/home" element={<Home />} />}
          {authenticated && <Route path="/favorite" element={<Favorite />} />}
          {authenticated && (
            <Route path="/collection" element={<Collection />} />
          )}
          {authenticated && <Route path="/settings" element={<Settings />} />}
          {authenticated && <Route path="/quiz" element={<QuestionPage />} />}
          {authenticated && <Route path="/result" element={<ResultPage />} />}
          {authenticated && (
            <Route path="/everything" element={<Everything />} />
          )}
          {authenticated && <Route path="/game/:id" element={<GameDetail />} />}
          {authenticated && <Route path="/mobile" element={<MobilePage />} />}
          {!authenticated && (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <AnswerProvider>
      <FavoriteProvider>
        <CollectionProvider>
            <AuthContext>
              <App />
            </AuthContext>
        </CollectionProvider>
      </FavoriteProvider>
    </AnswerProvider>
  </Router>
);

export default AppWrapper;
