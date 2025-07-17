import { useAppDispatch, useAppSelector, type RootState } from '../../store';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../store/slices/todoSlices';
import { useEffect } from 'react';
import { type Tasks } from '../../types/TodoList';

export const useTodos = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state: RootState) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleCreate = (todo: Omit<Tasks, 'id'>) => {
    dispatch(createTodo(todo));
  };

  const handleUpdate = (todo: Tasks) => {
    dispatch(updateTodo(todo));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return {
    data,
    loading,
    error,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};
