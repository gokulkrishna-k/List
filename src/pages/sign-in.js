import React from 'react';
import { SignInForm } from '../containers';
import { LoginPageWrapper } from '../components';
import { Header, Logo } from '../components';

const SignIn = () => {
  return (
    <LoginPageWrapper>
      <Header>
        <Logo />
        <Header.Button>Sign Up</Header.Button>
      </Header>
      <SignInForm />
    </LoginPageWrapper>
  );
};

export default SignIn;
