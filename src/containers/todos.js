import React, { useContext, useState } from 'react';
import { addTodoItem, deleteTodoItem } from '../firebase/firebase.utils';
import {
  TodoItem,
  TodoForm,
  TodosWrapper,
  TodoListWrapper,
} from '../components';
import { TodoListContext } from '../context/todo-context';
import { AnimatePresence } from 'framer-motion';

const Todos = ({ category, setSidebar, ...restProps }) => {
  const { state } = useContext(TodoListContext);
  const { todos, selectedCategory } = state;

  const [todoInput, setTodoInput] = useState('');

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput === '') return;
    const itemToAdd = { todo: todoInput, category: selectedCategory };
    addTodoItem(itemToAdd, state);
    setTodoInput('');
  };

  const handleDelete = (id) => {
    deleteTodoItem(id, state);
  };

  const getCategory = (categoryId) => {
    const filterCat = state.categories.filter(
      (category) => categoryId === category.id
    );
    return filterCat[0];
  };

  const filterSelectedCategory =
    selectedCategory === 'All' ? 'All' : getCategory(selectedCategory);
  const filteredTodos = todos
    ? todos.filter(
        (todo) =>
          todo.category === selectedCategory || selectedCategory === 'All'
      )
    : [];

  return (
    <TodosWrapper {...restProps} onClick={() => setSidebar(false)}>
      {selectedCategory !== 'All' && (
        <TodoForm onSubmit={handleSubmit}>
          <TodoForm.Input onChange={handleChange} value={todoInput} />
          <TodoForm.Button type='submit'>Add To List</TodoForm.Button>
        </TodoForm>
      )}

      <TodosWrapper.Title>
        {filterSelectedCategory === 'All'
          ? 'All'
          : filterSelectedCategory.categoryName}
      </TodosWrapper.Title>
      <TodoListWrapper>
        <AnimatePresence>
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => {
              const color = getCategory(todo.category);

              return (
                <TodoItem key={todo.id} categoryColor={color.color}>
                  <TodoItem.Text>{todo.todo}</TodoItem.Text>
                  <TodoItem.DeleteButton
                    onClick={() => handleDelete(todo.id)}
                  />
                </TodoItem>
              );
            })
          ) : (
            <TodoListWrapper.EmptyMessage>
              No items found!!
            </TodoListWrapper.EmptyMessage>
          )}
        </AnimatePresence>
      </TodoListWrapper>
    </TodosWrapper>
  );
};

export default Todos;
