import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TodoList } from './../entities/todo-list-model';

@Injectable({ providedIn: 'root' })
export class TodosHttpService {
  private list: TodoList[] = [
    {
      id: 1,
      name: 'Shopping List',
      todos: [
        {
          name: 'Bread',
          isCompleted:false,
        },
        {
          name: 'Butter',
          isCompleted:false,
        },
        {
          name: 'Ham',
          isCompleted:false,
        },
        {
          name: 'Tomato',
          isCompleted:false,
        },
        {
          name: 'Cucumber',
          isCompleted:false,
        }
      ]
    },
    {
      id: 2,
      name: 'Wish list',
      todos: [
        {
          name: 'Hot wheels car',
          isCompleted:false,
        },
        {
          name: 'RC Car',
          isCompleted:false,
        }

      ]
    },
    {
      id: 3,
      name: 'Morning routine',
      todos: [
        {
          name: 'Get shower',
          isCompleted:false,
        },
        {
          name: 'Dress up',
          isCompleted:false,
        },
        {
          name: 'Have breakfast',
          isCompleted:false,
        }
      ]
    },
    {
      id: 4,
      name: 'Pay bills',
      todos: [
        {
          name: 'Pay rent',
          isCompleted:false,
        },
        {
          name: 'Pay phone bill',
          isCompleted:false,
        },
        {
          name: 'Give back money',
          isCompleted:true,
        }
      ]
    },
    {
      id: 5,
      name: 'Vacation list',
      todos: [
        {
          name: 'Buy new shoes',
          isCompleted:false,
        },
        {
          name: 'Book a hotel',
          isCompleted:true,
        },
        {
          name: 'Remember about phone charger',
          isCompleted:false,
        }
      ]
    }
  ]

  get() : Observable<TodoList[]> {
    const copy = this.list.map(x => JSON.parse(JSON.stringify(x)));
    return of(copy);
  }

  add(todoList: TodoList): Observable<TodoList> {
    const newId = this.list.length == 0 ? 1:  Math.max(...this.list.map(o => o.id)) +1;
    const newItem = {...todoList, id: newId};
    this.list.push(newItem);
    return of(newItem);
  }

  remove(todoList: TodoList): Observable<void> {
    this.list.splice(this.list.indexOf(todoList),1);
    return of(null);
  }

  update(id: number, todoList: TodoList): Observable<TodoList> {
    const itemToUpdate = this.list.find(x => x.id == id);
    Object.assign(itemToUpdate, todoList);
    return of({...itemToUpdate});
  }
}
