import React, { useContext, useEffect } from 'react';
import { HomePageWrapper } from '../components';
import { SideBar, Todos } from '../containers';
import { TodoListContext } from '../context/todo-context';
import useAuthListener from '../hooks/use-auth-listener';
import { firestore } from '../firebase/firebase';
const Home = () => {
  const { state, dispatch } = useContext(TodoListContext);
  const { todos } = state;
  const user = useAuthListener();

  useEffect(() => {
    firestore
      .collection('users')
      .doc(user.uid)
      .onSnapshot((snapshot) => {
        const { userData } = snapshot.data();
        console.log(userData);
        console.log(user);
        dispatch({
          type: 'SET_CONTEXT',
          payload: userData,
        });
      });
  }, []);
  return (
    <HomePageWrapper>
      <SideBar />
      <Todos />
    </HomePageWrapper>
  );
};

export default Home;
