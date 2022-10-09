import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoList } from '../../entities/todo-list-model';
import { TodosDataService } from '../../services/todos-data.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  constructor(private readonly todosDataService: TodosDataService, public dialog: MatDialog) { }

  @Input()
  todoList: TodoList;
  hasHover = false;
  ngOnInit(): void {
  }

  onDelete(): void {
    this.todosDataService.removeTodoList(this.todoList);
  }

  onEdit(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: this.todoList,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.todosDataService.updateTodoList(this.todoList.id, result);
      }
      console.log('The dialog was closed');
    });
  }
}
