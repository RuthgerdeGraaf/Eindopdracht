import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
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
import { UserProvider } from "./context/UserContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { CollectionProvider } from "./context/CollectionContext";
import { AuthProvider } from "./context/AuthContext";
import CreateAccount from "./components/createAccount/CreateAccount.jsx";
import Users from "./pages/users/UserPage.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const showHeader = location.pathname !== "/";

  const { resetAnswers } = useContext(AnswerContext);

  const handleHomeClick = () => {
    resetAnswers();
    Navigate("/home");
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
          <Route path="/create-account" element={<CreateAccount />} />
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
          {authenticated && <Route path="/users" element={<Users />} />}
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
          <UserProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </UserProvider>
        </CollectionProvider>
      </FavoriteProvider>
    </AnswerProvider>
  </Router>
);

export default AppWrapper;
