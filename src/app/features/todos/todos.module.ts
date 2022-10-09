import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { StoreModule } from '@ngrx/store';
import { TodoListRoutingModule } from './todos-routing.module';
import { todosReducer, TODOS_STORAGE_FEATURE } from './store/reducers/todos.reducer';
import { TodosEffects } from './store/effects/todos.effects';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
const featureEffects = [
  TodosEffects
];

@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailsComponent,
    AddTodoComponent,
    EditTodoComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    StoreModule.forFeature(TODOS_STORAGE_FEATURE, todosReducer),
    EffectsModule.forFeature(featureEffects),
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class TodosModule {}
