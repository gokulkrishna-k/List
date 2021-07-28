import React from 'react';
import { LoginForm } from '../components';

const SignInForm = () => {
  return (
    <LoginForm>
      <LoginForm.Title>Sign In</LoginForm.Title>
      <LoginForm.Form>
        <LoginForm.Label>Email Address</LoginForm.Label>
        <LoginForm.Input type='email' placeholder='Enter your email' />
        <LoginForm.Label>Password</LoginForm.Label>
        <LoginForm.Input type='password' placeholder='Enter your password' />
        <LoginForm.Button>Sign In</LoginForm.Button>
      </LoginForm.Form>
    </LoginForm>
  );
};

export default SignInForm;
