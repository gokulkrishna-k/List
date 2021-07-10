import React, { useContext, useState } from 'react';
import './App.css';
import { Input, Button, TodoItem, HomePageWrapper } from './components';
import { SideBar } from './containers';
import { TodoListContext } from './context/todo-context';

function App() {
  const { state, dispatch } = useContext(TodoListContext);
  const TodoList = state.todos;

  const [todoInput, setTodoInput] = useState('');

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput === '') return;
    dispatch({ type: 'ADD_TODO', payload: todoInput });
    setTodoInput('');
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  console.log(state);
  return (
    <HomePageWrapper>
      <SideBar />
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={todoInput} />
        <Button type='submit'>Add To List</Button>
      </form>
      {TodoList.map((todo) => (
        <TodoItem key={todo.id}>
          <TodoItem.Text>{todo.todo}</TodoItem.Text>
          <TodoItem.DeleteButton onClick={() => handleDelete(todo.id)} />
        </TodoItem>
      ))}
    </HomePageWrapper>
  );
}

export default App;
