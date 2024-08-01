import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
