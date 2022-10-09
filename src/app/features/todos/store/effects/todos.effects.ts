import { map, mergeMap, of, switchMap } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { TodosStorageActions } from '../actions/todos.actions';
import { TodosHttpService } from '../../services/todos-http.service';

@Injectable()
export class TodosEffects {
  constructor(private readonly actions$: Actions, private readonly todosHttpService: TodosHttpService){

  }

  readonly loadTodoList$ = createEffect(() => this.actions$.pipe(
    ofType(TodosStorageActions.LOAD),
    mergeMap(() => this.todosHttpService.get().pipe(
      map(todoLists => TodosStorageActions.LOAD_SUCCESS({todoLists}))
    ))
  ));

  readonly add$ = createEffect(() => this.actions$.pipe(
    ofType(TodosStorageActions.ADD),
    switchMap(({ todoList }) => this.todosHttpService.add(todoList).pipe(
      map((newItem) => TodosStorageActions.ADD_SUCCESS({todoList: newItem}))
    ))
  ));

  readonly remove$ = createEffect(() => this.actions$.pipe(
    ofType(TodosStorageActions.REMOVE),
    switchMap(({ todoList }) => this.todosHttpService.remove(todoList).pipe(
      map(() => TodosStorageActions.REMOVE_SUCCESS({todoList}))
    ))
  ));

  readonly update$ = createEffect(() => this.actions$.pipe(
    ofType(TodosStorageActions.UPDATE),
    switchMap(({id, todoList }) => this.todosHttpService.update(id, todoList).pipe(
      map((updatedItem) => TodosStorageActions.UPDATE_SUCCESS({todoList: updatedItem}))
    ))
  ));
}
