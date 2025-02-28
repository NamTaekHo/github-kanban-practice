export interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface AddTodo {
  onSubmit: (todo: TodoItem) => void;
}

export interface TodoProps {
  todos: TodoItem[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
