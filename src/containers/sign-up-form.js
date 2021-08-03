import React, { useState } from 'react';
import { LoginForm } from '../components';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { createUserProfileDocumnet } from '../firebase/firebase.utils';
import { auth } from '../firebase/firebase';

const SignUpForm = () => {
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const isInvalid = userName === '' || password === '' || emailAddress === '';

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const redirect = () => history.push(ROUTES.HOME);
      const userAuth = await auth.createUserWithEmailAndPassword(
        emailAddress,
        password
      );
      await userAuth.user.updateProfile({ displayName: userName });
      await createUserProfileDocumnet(userAuth.user, redirect);

      setLoading(false);
    } catch (error) {
      setUserName('');
      setEmailAddress('');
      setPassword('');
      setLoading(false);

      console.log(error);
    }
  };

  return (
    <LoginForm>
      <LoginForm.Title>Sign Up</LoginForm.Title>
      <LoginForm.Form onSubmit={handleSignUp}>
        <LoginForm.Label>User Name</LoginForm.Label>
        <LoginForm.Input
          type='text'
          placeholder='Enter your username'
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
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

        <LoginForm.Button type='submit' loading={loading} disabled={isInvalid}>
          Sign Up
        </LoginForm.Button>
      </LoginForm.Form>
    </LoginForm>
  );
};

export default SignUpForm;
