import React from 'react';
import { FooterContainer, SignUpForm } from '../containers';
import { LoginPageWrapper } from '../components';

import { Header, Logo } from '../components';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
const SignUp = () => {
  const history = useHistory();

  return (
    <>
      <LoginPageWrapper>
        <Header>
          <Logo />
          <Header.Group>
            <Header.ThemeButton />
            <Header.Button onClick={() => history.push(ROUTES.SIGN_IN)}>
              Sign In
            </Header.Button>
          </Header.Group>
        </Header>
        <SignUpForm />
      </LoginPageWrapper>
      <FooterContainer />
    </>
  );
};

export default SignUp;
