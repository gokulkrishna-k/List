import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, SignIn, SignUp } from './pages';
import LandingPage from './pages/landing';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/global-styles';
import { lightTheme, darkTheme } from './theme/theme';
import { TodoListContext } from './context/todo-context';
import { auth } from './firebase/firebase';
const App = () => {
  const { state, dispatch } = useContext(TodoListContext);
  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem(
          'authUser',
          JSON.stringify({ uid: authUser.uid, loggedIn: true })
        );
        dispatch({
          type: 'SET_USER',
          payload: authUser,
        });
      } else {
        localStorage.removeItem('authUser');
        dispatch({
          type: 'SET_USER',
          payload: null,
        });
      }
    });
    return () => listener();
  }, []);

  const user = state.user;
  return (
    <ThemeProvider
      theme={state.selectedTheme === 'light' ? lightTheme : darkTheme}
    >
      <GlobalStyles />
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.SIGN_IN}
          >
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.SIGN_UP}
          >
            <SignUp />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.HOME}>
            <Home />
          </ProtectedRoute>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.LANDING}
          >
            <LandingPage />
          </IsUserRedirect>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
