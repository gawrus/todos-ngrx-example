import { TodoItem } from "./todo-item.model";

export interface TodoList {
  id: number;
  name: string;
  todos: TodoItem[];
}
