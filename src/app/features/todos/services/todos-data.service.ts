import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TodoList } from "../entities/todo-list-model";
import { EventTypesStorageSelectors } from "../store/selectors/todos.selectors";
import { distinctUntilChanged } from 'rxjs/operators';
import { TodosStorageActions } from "../store/actions/todos.actions";

@Injectable({ providedIn: 'root' })
export class TodosDataService {
  constructor(private readonly store$: Store, private actions$: Actions) {}

  todoListEntites$(): Observable<TodoList[]> {
    return this.store$.select(EventTypesStorageSelectors.entities).pipe(distinctUntilChanged());
  }

  loadTodoLists(): void {
    this.store$.dispatch(TodosStorageActions.LOAD());
  }

  addTodoList(todoList: TodoList): void {
    this.store$.dispatch(TodosStorageActions.ADD({ todoList }));
  }

  removeTodoList(todoList: TodoList): void {
    this.store$.dispatch(TodosStorageActions.REMOVE({ todoList }));
  }
  updateTodoList(id:number, todoList: TodoList): void {
    this.store$.dispatch(TodosStorageActions.UPDATE({id, todoList }));
  }
}
