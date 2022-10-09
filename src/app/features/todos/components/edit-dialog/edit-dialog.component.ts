import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoList } from '../../entities/todo-list-model';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  @ViewChild(EditTodoComponent) editComponent: EditTodoComponent;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoList,
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    if(this.editComponent.form.valid) {
      const todoList: TodoList = this.editComponent.formValueToTodoList;
      this.dialogRef.close(todoList);
    }
  }
}
