import React from 'react';

import { Header, Logo } from '../components';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

const Landing = () => {
  const history = useHistory();

  return (
    <>
      <Header>
        <Logo />
        <Header.Group>
          <Header.ThemeButton />
          <Header.Button onClick={() => history.push(ROUTES.SIGN_IN)}>
            Sign In
          </Header.Button>
        </Header.Group>
      </Header>
      <h1 style={{ textAlign: 'center' }}>Working On it!!!</h1>
    </>
  );
};

export default Landing;
