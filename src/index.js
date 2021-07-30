import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import { TodoListProvider } from './context/todo-context';
import firebase from './firebase/firebase';
import { FirebaseContext } from './context/firebase';
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <TodoListProvider>
        <App />
      </TodoListProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
