import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/todos';

// Async thunks
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await axios.post(apiUrl, todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`${apiUrl}/${id}`);
  return id;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
  const response = await axios.put(`${apiUrl}/${todo.id}`, todo);
  return response.data;
});

// Slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        state.todos[index] = action.payload;
      });
  },
});

export default todoSlice.reducer;
