import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { TaskService } from '../task.service';

import {Task} from '../task';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ],
})
export class CardComponent{
  @Output()
  uploaded:EventEmitter<string> = new EventEmitter();

  constructor(
    private taskService: TaskService
  ) {}

  @Input() task: Task;

  delete(id: number): void{
    this.taskService.delete(id)
      .then(tasks => {
        this.uploaded.emit('complete');
      });
  }

}
