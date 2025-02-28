import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import { useState } from 'react';
import './todos.css';
import { TodoItem } from './interfaces';

const Todos: React.FC = () => {
  // useState 타입지정
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // Todo 추가 합수
  const addTodo = (todo: TodoItem): void => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  // Todo 삭제 함수
  const removeTodo = (id: number): void => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  };

  // Todo 완료 처리 함수
  const completeTodo = (id: number): void => {
    const completedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(completedTodo);
  };

  return (
    <div>
      <div className="todo-app">
        <h1>To Do List</h1>
        <h2>오늘은 무슨 일을 계획하나요?</h2>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};

export default Todos;
