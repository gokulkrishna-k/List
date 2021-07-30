import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { TodoListContext } from '../context/todo-context';
export default function useAuthListener() {
  const { firebase } = useContext(FirebaseContext);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem(
          'authUser',
          JSON.stringify({ uid: authUser.uid, loggedIn: true })
        );
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');

        setUser(null);
      }
    });
    return () => listener();
  }, []);

  return user;
}
