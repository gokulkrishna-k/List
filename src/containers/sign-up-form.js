import React from 'react';
import { LoginForm } from '../components';

const SignUpForm = () => {
  return (
    <LoginForm>
      <LoginForm.Title>Sign Up</LoginForm.Title>
      <LoginForm.Form>
        <LoginForm.Label>User Name</LoginForm.Label>
        <LoginForm.Input type='text' placeholder='Enter your username' />
        <LoginForm.Label>Email Address</LoginForm.Label>
        <LoginForm.Input type='email' placeholder='Enter your email' />
        <LoginForm.Label>Password</LoginForm.Label>
        <LoginForm.Input type='password' placeholder='Enter your password' />
        <LoginForm.Button>Sign Up</LoginForm.Button>
      </LoginForm.Form>
    </LoginForm>
  );
};

export default SignUpForm;
