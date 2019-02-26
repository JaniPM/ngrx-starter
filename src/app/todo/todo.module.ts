import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ContainerComponent } from './container/container.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [ContainerComponent, TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
