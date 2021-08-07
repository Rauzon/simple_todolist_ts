import React, { MouseEvent } from 'react';
import { ITodo } from '../types/types';

type TodoListPropsType = {
    todos: ITodo[]
    removeTodo(id: number): void
    changeTodo(id: number): void
}

const TodoList = ({ todos, removeTodo, changeTodo }: TodoListPropsType): JSX.Element => {
  if (todos.length === 0) {
    return <p className="center">we have not any deal</p>;
  }
  return (
    <ul>
      {todos.map(({ title, id, completed }) => {
        const classes = ['todo'];
        if (completed) {
          classes.push('completed');
        }

        const onRemoveTodoHandler = (e: MouseEvent, elementId: number) => {
          e.preventDefault();
          removeTodo(elementId);
        };

        return (
          <li className={classes.join(' ')} key={id}>
            <label>
              <input
                type="checkbox"
                onChange={() => changeTodo(id)}
                checked={completed}
              />
              <span>{title}</span>
              <i className="material-icons red-text" onClick={(e) => onRemoveTodoHandler(e, id)}>delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
