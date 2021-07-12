import { useState, useReducer, createContext } from 'react';
import { AddTodoItem, DeleteTodoItem, AddCategory } from './todo-context.utils';

export const TodoListContext = createContext([]);

const defaultState = {
  selectedCategory: 'All',
  categories: [
    {
      id: '423434',
      categoryName: 'Work',
      color: '#1665d8',
    },
    {
      id: '4232434',
      categoryName: 'Projects',
      color: '#1665d8',
    },
    {
      id: '4234534',
      categoryName: 'Anime',
      color: '#1665d8',
    },
  ],
  todos: [
    {
      id: 'jh34h32jk4h34j3h4jh4234jk2h',
      todo: 'todo-work',
      category: 'Work',
    },
    {
      id: 'jh34h334j2545jh4234jk2h',
      todo: 'todo-project',
      category: 'Projects',
    },
    {
      id: 'jh34h32j99993h49739744234jk2h',
      todo: 'todo-anime',
      category: 'Anime',
    },
  ],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: AddCategory(state.categories, action.payload),
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
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
