import React, { useContext, useState } from 'react';

import {
  TodoItem,
  TodoForm,
  TodosWrapper,
  TodoListWrapper,
} from '../components';
import { TodoListContext } from '../context/todo-context';

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

  const getCategoryColor = (categoryName) => {
    const filterCat = state.categories.filter(
      (category) => categoryName === category.categoryName
    );
    return filterCat[0];
  };

  return (
    <TodosWrapper>
      {selectedCategory !== 'All' && (
        <TodoForm onSubmit={handleSubmit}>
          <TodoForm.Input onChange={handleChange} value={todoInput} />
          <TodoForm.Button type='submit'>Add To List</TodoForm.Button>
        </TodoForm>
      )}

      <TodosWrapper.Title>{selectedCategory}</TodosWrapper.Title>
      <TodoListWrapper>
        {TodoList.map((todo) => {
          if (
            todo.category === selectedCategory ||
            selectedCategory === 'All'
          ) {
            const color = getCategoryColor(todo.category);
            return (
              <TodoItem key={todo.id} categoryColor={color.color}>
                <TodoItem.Text>{todo.todo}</TodoItem.Text>
                <TodoItem.DeleteButton onClick={() => handleDelete(todo.id)} />
              </TodoItem>
            );
          }
        })}
      </TodoListWrapper>
    </TodosWrapper>
  );
};

export default Todos;
