import { v4 as uuid } from 'uuid';
import { AddTodoToFirestore } from '../firebase/firebase.utils';

export const AddTodoItem = (todoList, itemToAdd) => {
  // AddTodoToFirestore()
  //   .then((snapshot) => console.log(snapshot))
  //   .catch((err) => console.log(err));
  return [{ id: uuid(), ...itemToAdd }, ...todoList];
};

export const DeleteTodoItem = (todoList, itemToDeleteId) => {
  const newTodoList = todoList.filter((todo) => itemToDeleteId !== todo.id);

  return newTodoList;
};

export const AddCategory = (categories, categoryToAdd) => {
  return [...categories, { id: uuid(), ...categoryToAdd }];
};

export const EditCategory = (categories, categoryToEdit) => {
  const editedCategories = categories.map((category) => {
    if (category.id === categoryToEdit.id) {
      return {
        ...categoryToEdit,
      };
    }
    return category;
  });

  return editedCategories;
};

export const DeleteCategory = (todos, categories, categoryIdToDelete) => {
  const newCategories = categories.filter(
    (category) => category.id !== categoryIdToDelete
  );

  const newTodos = todos.filter((todo) => todo.category !== categoryIdToDelete);

  return {
    selectedCategory: 'All',
    categories: newCategories,
    todos: newTodos,
  };
};
