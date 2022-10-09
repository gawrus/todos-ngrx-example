import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { TodoList } from "../../entities/todo-list-model";
import { TodosStorageActions } from '../actions/todos.actions';

export const TODOS_STORAGE_FEATURE = 'todosStorage';

export interface TodosInitialState {
  isLoading: boolean;
}

export const initialState: TodosInitialState = {
  isLoading: false
};

export type TodosStorageState = EntityState<TodoList> & TodosInitialState;
export const todosEntityAdapter = createEntityAdapter<TodoList>();
export const eventsInitialState: TodosStorageState = todosEntityAdapter.getInitialState(initialState);

const reducer = createReducer<TodosStorageState>(
  eventsInitialState,
  on(TodosStorageActions.LOAD, (state => ({...state, isLoading: true}))),
  on(TodosStorageActions.LOAD_SUCCESS, (state, {todoLists}) => todosEntityAdapter.upsertMany(todoLists, state)),
  on(TodosStorageActions.ADD_SUCCESS, (state, {todoList}) => todosEntityAdapter.upsertOne(todoList, state)),
  on(TodosStorageActions.REMOVE_SUCCESS, (state, {todoList}) => todosEntityAdapter.removeOne(todoList.id, state)),
  on(TodosStorageActions.UPDATE_SUCCESS, (state, {todoList}) => {
    return todosEntityAdapter.upsertOne(todoList, state);
    }
  )
)

export function todosReducer(state: TodosStorageState | undefined, action: Action): TodosStorageState | undefined {
  return reducer(state, action);
}
