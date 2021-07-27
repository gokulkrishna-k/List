import { useState, useReducer, createContext } from 'react';
import {
  AddTodoItem,
  DeleteTodoItem,
  AddCategory,
  EditCategory,
  DeleteCategory,
} from './todo-context.utils';

export const TodoListContext = createContext([]);

const defaultState = {
  selectedCategory: 'All',
  categories: [
    {
      id: '423434',
      categoryName: 'Work',
      color: '#167D7F',
    },
    {
      id: '4232434',
      categoryName: 'Projects',
      color: '#603F8B',
    },

    {
      id: '423534',
      categoryName: 'Anime',
      color: '#F41F4E',
    },
  ],
  todos: [
    {
      id: 'jh34h32jk4h34j3h4jh4234jk2h',
      todo: 'Send the mail',
      category: '423434',
    },
    {
      id: 'jh34h3342545jh4234jk2h',
      todo: 'Get back to the project soon',
      category: '4232434',
    },
    {
      id: 'jh34h32j99993h49739744234j2h',
      todo: 'Watch Attack on Titans',
      category: '423534',
    },
    {
      id: 'jh4h32jk4h3h4jh4234jk2h',
      todo: 'Finish and send the report on Monday',
      category: '423434',
    },
    {
      id: 'jh34h334j2545j34jh',
      todo: 'Finish the Todo App by next week',
      category: '4232434',
    },
    {
      id: 'jh3432j99993h497744234jk2h',
      todo: 'Watch Anime in weekend',
      category: '4232434',
    },
    {
      id: 'jh34h32jk4h3545h4jh4234j2h',
      todo: 'Meeting at 3.00pm on Monday',
      category: '423434',
    },
    {
      id: 'jh4h5435334j2545j34jk2h',
      todo: 'Start a new Project',
      category: '4232434',
    },
    {
      id: 'jh34h324399993h49774234jk2h',
      todo: 'Watch Jijustu Kaisen',
      category: '423534',
    },

    {
      id: 'jh3h32jk4h34j3h4jh4234jk2h',
      todo: 'Tommorow is a holiday',
      category: '423434',
    },
    {
      id: 'jh34h334j2545jh4234k2h',
      todo: 'Learn React',
      category: '4232434',
    },
    {
      id: 'jh3h32j99993h4973972h',
      todo: 'Search new Anime',
      category: '423534',
    },
    {
      id: 'jh34h32jk4h3h4jh4234jk2',
      todo: 'Search for internships',
      category: '423434',
    },
    {
      id: 'jh34h334j2545j34jkh',
      todo: 'Have to do a final year projects',
      category: '4232434',
    },
    {
      id: 'jh4h32j99993h497744234jk2h',
      todo: 'Prepare a watchlist',
      category: '423534',
    },
    {
      id: '4h32jk4h3545h4jh4234jkh',
      todo: 'Attend a client call this evening',
      category: '423434',
    },
    {
      id: 'jh34h535334j2545j34jk2h',
      todo: 'Get back to the todo app project',
      category: '4232434',
    },
    {
      id: 'jh34h3243744234jk2h',
      todo: 'Watch something',
      category: '423534',
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
    case 'EDIT_CATEGORY':
      return {
        ...state,
        categories: EditCategory(state.categories, action.payload),
      };
    case 'DELETE_CATEGORY':
      const newState = DeleteCategory(
        state.todos,
        state.categories,
        action.payload
      );
      return {
        ...state,
        ...newState,
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
