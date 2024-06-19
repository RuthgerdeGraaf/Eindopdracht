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
import Home from "../src/pages/Home";
import Favorite from "../src/pages/Favorite";
import Collection from "../src/pages/Collection";
import Settings from "../src/pages/Settings";
import PlayStationPage from "../src/pages/playstation/PlaystationPage.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
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
