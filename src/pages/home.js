import React, { useState, useContext, useEffect } from 'react';
import { Header, HomePageWrapper, Loading } from '../components';
import { SideBar, Todos } from '../containers';
import { TodoListContext } from '../context/todo-context';
import { firestore } from '../firebase/firebase';
import { Logo } from '../components';
import { auth } from '../firebase/firebase';

const Home = () => {
  const { state, dispatch } = useContext(TodoListContext);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const { user, todos } = state;

  useEffect(() => {
    if (user) {
      try {
        const userRef = firestore.collection('users').doc(user.uid);

        if (userRef) {
          userRef.onSnapshot((snapshot) => {
            const responceData = snapshot.data();
            if (responceData) {
              dispatch({
                type: 'SET_CONTEXT',
                payload: responceData.userData,
              });
            }
            setLoading(false);
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>
            <Header.Group>
              <Header.Burger onClick={() => setSidebar((state) => !state)} />
              <Logo />
            </Header.Group>

            <Header.Group>
              <Header.ThemeButton />
              <Header.Button onClick={() => auth.signOut()}>
                Sign Out
              </Header.Button>
            </Header.Group>
          </Header>
          <HomePageWrapper>
            <SideBar open={sidebar} />
            <Todos setSidebar={setSidebar} />
          </HomePageWrapper>
        </>
      )}
    </>
  );
};

export default Home;
