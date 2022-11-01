import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoComponent } from './edit-todo.component';

describe('EditTodoComponent', () => {
  let component: EditTodoComponent;
  let fixture: ComponentFixture<EditTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
