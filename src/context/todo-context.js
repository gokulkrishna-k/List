import { useState, useReducer, createContext } from 'react';
import { AddTodoItem, DeleteTodoItem } from './todo-context.utils';

export const TodoListContext = createContext([]);

const defaultState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: AddTodoItem(state.todos, action.payload),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: DeleteTodoItem(state.todos, action.payload),
      };
  }
};
export const TodoListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, defaultState);
  return (
    <TodoListContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};
