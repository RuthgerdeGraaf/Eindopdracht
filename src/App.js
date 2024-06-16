import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Home from "../src/pages/Home";
import Favorite from "../src/pages/Favorite"
import Collection from "../src/pages/Collection";
import Settings from "../src/pages/Settings";
import PlayStationPage from "../src/pages/playstation/PlaystationPage.jsx";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/playstation" element={<PlayStationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
