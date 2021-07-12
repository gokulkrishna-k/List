import React from 'react';
import './App.css';
import { HomePageWrapper } from './components';
import { SideBar, Todos } from './containers';

function App() {
  return (
    <HomePageWrapper>
      <SideBar />
      <Todos />
    </HomePageWrapper>
  );
}

export default App;
