import { firestore } from './firebase';
import { v4 as uuid } from 'uuid';

export const createUserProfileDocumnet = async (
  authUser,
  redirect,
  aditionalData
) => {
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();

    try {
      await userRef
        .set({
          displayName: authUser.displayName,
          email: authUser.email,
          createdAt,
          userData: {
            categories: [
              {
                id: '2343-4324243-4323434-3423412-4324',
                color: '#7289da',
                categoryName: 'General',
              },
            ],
            todos: [
              {
                category: '2343-4324243-4323434-3423412-4324',
                todo: 'Welcome to List. :)',
                id: '23445-23232-6776767-332',
              },
            ],
          },
          ...aditionalData,
        })
        .then(() => setTimeout(() => redirect(), 5000));
    } catch (error) {
      alert(error.message);
    }
  }

  return userRef;
};

export const addTodoItem = async (itemToAdd, state) => {
  const prevTodos = state.todos;
  const userRef = firestore.doc(`users/${state.user.uid}`);
  const limit = prevTodos.length;
  if (limit < 69) {
    try {
      await userRef.update({
        userData: {
          categories: state.categories,
          todos: [{ id: uuid(), ...itemToAdd }, ...prevTodos],
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return;
};

export const deleteTodoItem = async (itemToDeleteId, state) => {
  const TodoList = state.todos;
  const newTodoList = TodoList.filter((todo) => itemToDeleteId !== todo.id);

  const userRef = firestore.doc(`users/${state.user.uid}`);

  try {
    await userRef.update({
      userData: {
        categories: state.categories,
        todos: newTodoList,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addCategory = async (categoryToAdd, state) => {
  const { todos, categories } = state;
  const userRef = firestore.doc(`users/${state.user.uid}`);
  if (categories.length < 10) {
    try {
      await userRef.update({
        userData: {
          categories: [...categories, { id: uuid(), ...categoryToAdd }],
          todos: todos,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return;
};

export const deleteCategory = async (categoryIdToDelete, state) => {
  const { todos, categories } = state;
  const newCategories = categories.filter(
    (category) => category.id !== categoryIdToDelete
  );

  const newTodos = todos.filter((todo) => todo.category !== categoryIdToDelete);

  const userRef = firestore.doc(`users/${state.user.uid}`);

  try {
    await userRef.update({
      userData: {
        categories: newCategories,
        todos: newTodos,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const editCategory = async (categoryToEdit, state) => {
  const { todos, categories } = state;
  const editedCategories = categories.map((category) => {
    if (category.id === categoryToEdit.id) {
      return {
        ...categoryToEdit,
      };
    }
    return category;
  });

  const userRef = firestore.doc(`users/${state.user.uid}`);

  try {
    await userRef.update({
      userData: {
        categories: editedCategories,
        todos: todos,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
