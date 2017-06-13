import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { TaskService } from './task.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/dragula/dist/dragula.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  task_planned_time= 20;
  task_progress_time= 20;
  task_completed_time= 20;
  tasks_planned: {};
  tasks_progress: {};
  tasks_completed: {};

  constructor(private dragulaService: DragulaService, private taskService: TaskService) {
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
  }

  private onDrop(args) {
    let [e, el] = args;

    console.log(e);
    let c = e.getElementsByTagName("card")[0];
    let id = c.attributes.id.value;
    let new_status = el.getElementsByTagName("h4")[0].attributes.id.value;
    console.log("id "+ id + " to "+ new_status);
    this.taskService.update(id,new_status).then( tasks => {
      this.update_data(tasks);
    });
  }


  ngOnInit(): void {
    this.taskService.getTasks()
      .then(tasks => {
        this.update_data(tasks);
      });
  }

  private update_data(tasks){
    this.tasks_planned= tasks.tasks_planned;
    this.task_planned_time= tasks.time_planned;
    this.tasks_completed= tasks.tasks_completed;
    this.task_completed_time= tasks.time_completed;
    this.tasks_progress= tasks.tasks_progress;
    this.task_progress_time= tasks.time_progress;
  }


}
