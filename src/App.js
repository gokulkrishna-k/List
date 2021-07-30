import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, SignIn, SignUp, Landing } from './pages';
import useAuthListener from './hooks/use-auth-listener';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

const App = () => {
  const user = useAuthListener();
  console.log(user);
  return (
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
          <Landing />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
};

export default App;
