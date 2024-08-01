import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './features/todos/TodoSlice';
import TodoList from './features/todos/TodoList';
import TodoForm from './features/todos/TodoForm';
import { Container } from 'react-bootstrap';

const App = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchTodos());
    }, [dispatch]);
  
    return (
      <Container className="App">
        <h1 className="text-center my-4">Todo App</h1>
        <TodoForm />
        <TodoList />
      </Container>
    );
  };
  
  export default App;