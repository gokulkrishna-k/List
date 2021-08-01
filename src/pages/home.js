import React, { useContext, useEffect } from 'react';
import { Header, HomePageWrapper } from '../components';
import { SideBar, Todos } from '../containers';
import { TodoListContext } from '../context/todo-context';
import { firestore } from '../firebase/firebase';
import { Logo } from '../components';
const Home = () => {
  const { state, dispatch } = useContext(TodoListContext);

  const user = state.user;

  useEffect(() => {
    if (!user) {
      try {
        firestore
          .collection('users')
          .doc(user.uid)
          .onSnapshot((snapshot) => {
            const { userData } = snapshot.data();
            dispatch({
              type: 'SET_CONTEXT',
              payload: userData,
            });
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  }, []);

  const toggleTheme = () => {
    dispatch({
      type: 'SET_THEME',
      payload: state.selectedTheme === 'light' ? 'dark' : 'light',
    });
    console.log(state);
  };
  return (
    <>
      <Header>
        <Logo />
        <Header.ThemeButton theme={state.selectedTheme} onClick={toggleTheme} />
      </Header>
      <HomePageWrapper>
        <SideBar />
        <Todos />
      </HomePageWrapper>
    </>
  );
};

export default Home;
