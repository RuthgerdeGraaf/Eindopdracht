import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <div>
            <Button variant="login">Login</Button>
            <Button variant="next">Next</Button>
            <Button variant="previous">Previous</Button>
            <Button variant="return" icon="return"></Button>
          </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
