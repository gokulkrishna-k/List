import React from 'react';
import { SignInForm } from '../containers';
import { LoginPageWrapper } from '../components';

const SignIn = () => {
  return (
    <LoginPageWrapper>
      <SignInForm />
    </LoginPageWrapper>
  );
};

export default SignIn;
