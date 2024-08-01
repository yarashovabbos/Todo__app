import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './TodoSlice';
import { Form, Button } from 'react-bootstrap';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { text, complete: false, id: Date.now() };
    dispatch(addTodo(newTodo));
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="formTodoText">
        <Form.Label>Add Todo</Form.Label>
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default TodoForm;
