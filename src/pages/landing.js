import React from 'react';

import { Header, Logo, Landing } from '../components';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import Mockup from '../assets/MOCKUP.png';
import { LandingPageWrapper } from '../components';

const LandingPage = () => {
  const history = useHistory();

  return (
    <>
      <Header>
        <Logo />
        <Header.Group>
          <Header.ThemeButton />
          <Header.Button onClick={() => history.push(ROUTES.SIGN_IN)}>
            Sign In
          </Header.Button>
        </Header.Group>
      </Header>
      {/* <LandingPageWrapper> */}
      <Landing>
        <Landing.ContentContainer>
          <Landing.Title>List</Landing.Title>
          <Landing.Info>
            A simple and fast To-Do List that makes it easy to plan and organize
            your daily tasks.
          </Landing.Info>
          <Landing.ButtonContainer>
            <Landing.Button>Sign in to the app</Landing.Button>
            <Landing.Text>
              No account ? <Landing.Link>Sign Up</Landing.Link>
            </Landing.Text>
          </Landing.ButtonContainer>
        </Landing.ContentContainer>
        <Landing.Image src={Mockup} />
      </Landing>
      {/* </LandingPageWrapper> */}
    </>
  );
};

export default LandingPage;
