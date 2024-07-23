import { useContext, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Context
import { AuthContext } from './context/AuthContext';

// Pages
import Home from './pages/home/Home';
import LoginAndRegistration from './pages/loginAndRegistration/LoginAndRegistration';
import Profile from './pages/profile/Profile';
import PageNotFound from './pages/page-not-found/PageNotFound';
import Favorite from './pages/favorite/Favorite';
import Collection from './pages/collection/Collection';
import QuestionPage from './pages/questionPage/QuestionPage';
import ResultPage from './pages/resultPage/ResultPage';
import Everything from './pages/everything/Everything';
import GameDetail from './pages/gameDetail/GameDetail';
import MobilePage from './pages/mobilePage/MobilePage';

// Components
import Header from './components/header/Header';
import PageFooter from './components/footer/Footer';

// Style
import './App.scss';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Header className="Header" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="page-wrapper">
        <div className="page-content">
          <Routes>
            <Route
              path='/'
              element={isLoggedIn ? <Home /> : <Navigate to='/login-and-registration' />}
            />
            <Route
              path='/home'
              element={isLoggedIn ? <Home /> : <Navigate to='/login-and-registration' />}
            />
            <Route
              path='/login-and-registration'
              element={isLoggedIn ? <Navigate to='/profile' /> : <LoginAndRegistration />}
            />
            <Route
              path='/profile'
              element={isLoggedIn ? <Profile /> : <Navigate to='/login-and-registration' />}
            />

            <Route
              path='/favorite'
              element={isLoggedIn ? <Favorite /> : <Navigate to='/login-and-registration' />}
            />
            <Route
              path='/collection'
              element={isLoggedIn ? <Collection /> : <Navigate to='/login-and-registration' />}
            />
            <Route
              path='/questionPage'
              element={isLoggedIn ? <QuestionPage /> : <Navigate to='/login-and-registration' />}
            />
            <Route
              path='/resultPage'
              element={isLoggedIn ? <ResultPage /> : <Navigate to='/login-and-registration' />}
            />
            <Route
              path='/everything'
              element={isLoggedIn ? <Everything /> : <Navigate to='/login-and-registration' />}
            />
            <Route
              path='/gameDetail'
              element={isLoggedIn ? <GameDetail /> : <Navigate to='/login-and-registration' />}
            />
            <Route
              path='/mobilePage'
              element={isLoggedIn ? <MobilePage /> : <Navigate to='/login-and-registration' />}
            />
            <Route
              path='*'
              element={<PageNotFound />}
            />
          </Routes>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
