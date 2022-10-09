import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from '../../entities/todo-item.model';
import { TodoList } from '../../entities/todo-list-model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  @Input()
  todoList: TodoList;

  form: FormGroup = null;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(this.todoList.name, Validators.required),
      todos: this.formBuilder.array([])
    });
    for(let item of this.todoList.todos) {
      this.addTodo(item);
    }
    this.form.controls['name'].statusChanges.subscribe(status => {

    })
  }

  get todos() {
    return this.form.controls["todos"] as FormArray;
  }

  addTodo(todoItem: TodoItem = null) {
    const lessonForm = this.formBuilder.group({
        name: [todoItem ? todoItem.name : '', Validators.required],
        isCompleted: [todoItem ? todoItem.isCompleted : false, Validators.required],
    });

    this.todos.push(lessonForm);
  }

  deleteTodo(lessonIndex: number) {
    this.todos.removeAt(lessonIndex);
  }

  get formValueToTodoList(): TodoList {
    const updatedItem: TodoList = {id: this.todoList.id, name: this.form.value.name, todos: []};
    this.todos.controls.forEach((element, index) => {
      const todo: TodoItem = element.value;
      updatedItem.todos.push(todo);
    });
    return updatedItem;
  }

  resetForm() {
    this.form.reset();
    while (this.todos.length !== 0) {
      this.todos.removeAt(0);
    }
    this.addTodo();
  }
}
