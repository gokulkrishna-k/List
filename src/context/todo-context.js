import { useReducer, createContext } from 'react';
export const TodoListContext = createContext([]);

const defaultState = {
  user: JSON.parse(localStorage.getItem('authUser')),
  selectedCategory: 'All',
  selectedTheme: 'dark',
  categories: [],
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_CONTEXT':
      return {
        ...state,
        todos: action.payload.todos,
        categories: action.payload.categories,
      };
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case 'SET_THEME':
      return {
        ...state,
        selectedTheme: action.payload,
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
