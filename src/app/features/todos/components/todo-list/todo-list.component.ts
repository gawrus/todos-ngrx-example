import { TodosDataService } from '../../services/todos-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from '../../entities/todo-list-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoListEntites$: Observable<TodoList[]> | null = null;

  constructor(private readonly todosDataService: TodosDataService) { }

  ngOnInit(): void {
    this.todoListEntites$ = this.todosDataService.todoListEntites$();
    this.todosDataService.loadTodoLists();
  }
}
