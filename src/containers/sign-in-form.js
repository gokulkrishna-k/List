import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { LoginForm } from '../components';
import * as ROUTES from '../constants/routes';

const SignInForm = () => {
  const history = useHistory();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  const handleSignIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        console.log(error.message);
      });
  };

  return (
    <LoginForm>
      <LoginForm.Title>Sign In</LoginForm.Title>
      <LoginForm.Form onSubmit={handleSignIn}>
        <LoginForm.Label>Email Address</LoginForm.Label>
        <LoginForm.Input
          type='email'
          placeholder='Enter your email'
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <LoginForm.Label>Password</LoginForm.Label>
        <LoginForm.Input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <LoginForm.Button>Sign In</LoginForm.Button>
      </LoginForm.Form>
    </LoginForm>
  );
};

export default SignInForm;
