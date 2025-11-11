import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "./task/task";
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Taskservice } from './taskservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskComponent,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CurrencyPipe,DecimalPipe,PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
tasks: any[] = [];
constructor(private taskService: Taskservice) {}
ngOnInit() {
this.tasks = this.taskService.getTasks();
}

  today = new Date();
  price = 1234.56;
  percentage = 0.259;
  protected readonly title = signal('todolist');

addNewTask(){
  this.taskService.addTask("new task service")
}
 removeTask(idx:number){
this.taskService.removeTasks(idx)
}
}