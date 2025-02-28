import React, { useState, useEffect, useRef } from 'react';
import { AddTodo } from '../interfaces';

const TodoForm = ({ onSubmit }: AddTodo) => {
  const [input, setInput] = useState<string>('');
  const [number, setNumber] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);

  // 최초 1회 렌더링
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNumber(number + 1);

    onSubmit({
      id: number,
      text: input,
      isComplete: false,
    });

    setInput('');
  };

  return (
    <form id="todoForm" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
};

export default TodoForm;
