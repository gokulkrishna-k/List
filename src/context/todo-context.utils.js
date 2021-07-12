import { v4 as uuid } from 'uuid';
import { AddTodoToFirestore } from '../firebase/firebase.utils';

export const AddTodoItem = (todoList, itemToAdd) => {
  // AddTodoToFirestore()
  //   .then((snapshot) => console.log(snapshot))
  //   .catch((err) => console.log(err));
  return [...todoList, { id: uuid(), ...itemToAdd }];
};

export const DeleteTodoItem = (todoList, itemToDeleteId) => {
  const newTodoList = todoList.filter((todo) => itemToDeleteId !== todo.id);

  return newTodoList;
};

export const AddCategory = (categories, categoryToAdd) => {
  return [...categories, { id: uuid(), categoryToAdd, color: '#1665d8' }];
};
