import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from './TodoSlice';
import { ListGroup, Button } from 'react-bootstrap';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggleComplete = () => {
    dispatch(updateTodo({ ...todo, complete: !todo.complete }));
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
        onClick={handleToggleComplete}
      >
        {todo.text}
      </span>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
