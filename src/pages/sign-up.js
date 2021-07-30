import React from 'react';
import { SignUpForm } from '../containers';
import { LoginPageWrapper } from '../components';

import { Header, Logo } from '../components';

const SignUp = () => {
  return (
    <LoginPageWrapper>
      <Header>
        <Logo />
        <Header.Button>Sign In</Header.Button>
      </Header>
      <SignUpForm />
    </LoginPageWrapper>
  );
};

export default SignUp;
