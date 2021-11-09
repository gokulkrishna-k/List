import React, { useContext } from 'react';

import { Header, Logo, Landing } from '../components';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import MockupLight from '../assets/mockup-light.png';
import MockupDark from '../assets/mockup-dark.png';
import { LandingPageWrapper } from '../components';
import { TodoListContext } from '../context/todo-context';

const LandingPage = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(TodoListContext);
  const theme = state.selectedTheme;
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
            <Landing.Button onClick={() => history.push(ROUTES.SIGN_IN)}>
              Sign in to the app
            </Landing.Button>
            <Landing.Text>
              No account ? <Landing.Link to='/signup'>Sign Up</Landing.Link>
            </Landing.Text>
          </Landing.ButtonContainer>
        </Landing.ContentContainer>
        {theme === 'light' ? (
          <Landing.Image src={MockupLight} />
        ) : (
          <Landing.Image src={MockupDark} />
        )}
      </Landing>
      {/* </LandingPageWrapper> */}
    </>
  );
};

export default LandingPage;
