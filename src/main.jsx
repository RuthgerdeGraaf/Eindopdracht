import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
import { FavoriteProvider } from "./context/FavoriteContext.jsx";
import { CollectionProvider } from "./context/CollectionContext.jsx";
import { AnswerProvider } from "./context/AnswerContext.jsx";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AnswerProvider>
          <FavoriteProvider>
            <CollectionProvider>
              <Router>
                <App />
              </Router>
            </CollectionProvider>
          </FavoriteProvider>
        </AnswerProvider>
    </AuthContextProvider>
  </React.StrictMode>
);