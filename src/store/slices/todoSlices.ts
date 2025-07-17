import { createSlice, type PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type ApiTodo, type Tasks } from '../../types/TodoList';
import { DUMMYDATA } from '../../utils/constant';

interface TodoState {
  data: ApiTodo;
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  data: {
    total: 0,
    skip: 0,
    limit: 0,
    todos: []
  },
  loading: false,
  error: null
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const res = await axios.get<ApiTodo>('https://dummyjson.com/todos');
    return res.data;
  } catch {
    return DUMMYDATA;
  }
});

let idCounter = 10000;

const todoSlices = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo(state, action: PayloadAction<Omit<Tasks, 'id'>>) {
      const newTodo: Tasks = { ...action.payload, id: idCounter++ };
      state.data.todos.push(newTodo);
      state.data.total += 1;
    },
    updateTodo(state, action: PayloadAction<Tasks>) {
      const index = state.data.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.data.todos[index] = action.payload;
      }
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.data.todos = state.data.todos.filter(todo => todo.id !== action.payload);
      state.data.total -= 1;
    },
    addSubtask() {
      // subtask
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      }),
});

export const { createTodo, updateTodo, deleteTodo, addSubtask } = todoSlices.actions;
export default todoSlices.reducer;
