import React from 'react';
import { SignInForm } from '../containers';
import { LoginPageWrapper } from '../components';
import { Header, Logo } from '../components';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();

  return (
    <LoginPageWrapper>
      <Header>
        <Logo />
        <Header.Group>
          <Header.ThemeButton />
          <Header.Button onClick={() => history.push(ROUTES.SIGN_UP)}>
            Sign Up
          </Header.Button>
        </Header.Group>
      </Header>
      <SignInForm />
    </LoginPageWrapper>
  );
};

export default SignIn;
