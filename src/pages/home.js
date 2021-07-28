import React from 'react';
import { HomePageWrapper } from '../components';
import { SideBar, Todos } from '../containers';

const Home = () => {
  return (
    <HomePageWrapper>
      <SideBar />
      <Todos />
    </HomePageWrapper>
  );
};

export default Home;
