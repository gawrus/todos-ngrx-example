import { TodoList } from './../../entities/todo-list-model';
import { createAction, props } from '@ngrx/store';
export class TodosStorageActions {
  static readonly LOAD = createAction('[Storage: Todos] LOAD');
  static readonly LOAD_SUCCESS = createAction('[Storage: Todos] LOAD_SUCCESS', props<{todoLists: TodoList[]}>());

  static readonly ADD = createAction('[Storage: Todos] ADD', props<{todoList: TodoList}>());
  static readonly ADD_SUCCESS = createAction('[Storage: Todos] ADD_SUCCESS', props<{todoList: TodoList}>());

  static readonly REMOVE = createAction('[Storage: Todos] REMOVE', props<{todoList: TodoList}>());
  static readonly REMOVE_SUCCESS = createAction('[Storage: Todos] REMOVE_SUCCESS', props<{todoList: TodoList}>());

  static readonly UPDATE = createAction('[Storage: Todos] UPDATE', props<{id: number, todoList: TodoList}>());
  static readonly UPDATE_SUCCESS = createAction('[Storage: Todos] UPDATE_SUCCESS', props<{todoList: TodoList}>());
}
