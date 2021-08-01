import React from 'react';
import { SignUpForm } from '../containers';
import { LoginPageWrapper } from '../components';

import { Header, Logo } from '../components';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
const SignUp = () => {
  const history = useHistory();

  return (
    <LoginPageWrapper>
      <Header>
        <Logo />
        <Header.Button onClick={() => history.push(ROUTES.SIGN_IN)}>
          Sign In
        </Header.Button>
      </Header>
      <SignUpForm />
    </LoginPageWrapper>
  );
};

export default SignUp;
