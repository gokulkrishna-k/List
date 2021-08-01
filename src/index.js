import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import { TodoListProvider } from './context/todo-context';

ReactDOM.render(
  <React.StrictMode>
    <TodoListProvider>
      <App />
    </TodoListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
