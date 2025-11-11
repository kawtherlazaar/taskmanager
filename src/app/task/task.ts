import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class TaskComponent {
   
  @Input() taskTitle='learn angular';
  @Input() isDone =false;
  @Output() remouve =new EventEmitter<void>()
  markAsDone() {
    this.isDone = !this.isDone;
  }
  deleteTask(){
    this.remouve.emit();
  }
}
