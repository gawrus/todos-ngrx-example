import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoList } from '../../entities/todo-list-model';
import { TodosDataService } from '../../services/todos-data.service';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todoList: TodoList =  {id: null, name: '',todos:[ {name: '', isCompleted: false}]};

  constructor(private readonly todosDataService: TodosDataService) { }

  @ViewChild(EditTodoComponent) editComponent: EditTodoComponent;
  hasHover = false;
  ngOnInit(): void {
  }

  onSubmit() {
    if(this.editComponent.form.valid) {
      const todoList: TodoList = this.editComponent.form.value;
      this.todosDataService.addTodoList(todoList);
      this.editComponent.resetForm();
    }

  }
}
