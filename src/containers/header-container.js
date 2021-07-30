import React from 'react';
import { Header, Logo } from '../components';

const HeaderContainer = () => {
  return (
    <Header>
      <Logo />
      <Header.Button>Sign Up</Header.Button>
    </Header>
  );
};

export default HeaderContainer;
