import React, {
  KeyboardEvent, useRef,
} from 'react';

type TodoFormPropsType = {
    addTodo(title: string): void
}

const TodoForm = ({ addTodo }: TodoFormPropsType): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);

  const onKeypressHandler = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        placeholder="Enter name of deal"
        // value={title}
        // onChange={onChangeHandler}
        onKeyPress={onKeypressHandler}
        ref={ref}
      />
      <label htmlFor="title" className="active">Enter name of deal</label>
    </div>
  );
};

export default TodoForm;
