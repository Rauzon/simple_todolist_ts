import React, { useEffect, useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../types/types';

declare const confirm:(question: string) => boolean;

type TodosPagePropsType = {

};

const TodosPage = (props: TodosPagePropsType): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodoHandler = (id: number) => {
    const isConfirmed = confirm('Are you sure that you want to remove todo?');
    if (isConfirmed) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  const changeTodoHandler = (id: number) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  return (
    <>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        removeTodo={removeTodoHandler}
        changeTodo={changeTodoHandler}
      />
    </>
  );
};

export default TodosPage;
