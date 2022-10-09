import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';


const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: 'details', component: TodoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class TodoListRoutingModule {}
