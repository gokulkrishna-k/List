import React, { useContext, useState } from 'react';

import {
  TodoItem,
  TodoForm,
  TodosWrapper,
  TodoListWrapper,
} from '../components';
import { TodoListContext } from '../context/todo-context';
import { AnimatePresence } from 'framer-motion';

const Todos = ({ category, ...restProps }) => {
  const { state, dispatch } = useContext(TodoListContext);
  const TodoList = state.todos;
  const selectedCategory = state.selectedCategory;

  const [todoInput, setTodoInput] = useState('');

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput === '') return;
    dispatch({
      type: 'ADD_TODO',
      payload: { todo: todoInput, category: selectedCategory },
    });
    setTodoInput('');
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const getCategory = (categoryId) => {
    const filterCat = state.categories.filter(
      (category) => categoryId === category.id
    );
    return filterCat[0];
  };
  const filterSelectedCategory = getCategory(selectedCategory);

  return (
    <TodosWrapper {...restProps}>
      {selectedCategory !== 'All' && (
        <TodoForm onSubmit={handleSubmit}>
          <TodoForm.Input onChange={handleChange} value={todoInput} />
          <TodoForm.Button type='submit'>Add To List</TodoForm.Button>
        </TodoForm>
      )}

      <TodosWrapper.Title>
        {filterSelectedCategory ? filterSelectedCategory.categoryName : 'All'}
      </TodosWrapper.Title>
      <TodoListWrapper>
        <AnimatePresence>
          {TodoList.map((todo) => {
            if (
              todo.category === selectedCategory ||
              selectedCategory === 'All'
            ) {
              const color = getCategory(todo.category);

              return (
                <TodoItem key={todo.id} categoryColor={color.color}>
                  <TodoItem.Text>{todo.todo}</TodoItem.Text>
                  <TodoItem.DeleteButton
                    onClick={() => handleDelete(todo.id)}
                  />
                </TodoItem>
              );
            }
          })}
        </AnimatePresence>
      </TodoListWrapper>
    </TodosWrapper>
  );
};

export default Todos;
