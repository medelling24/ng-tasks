import { Component, Input, OnInit } from '@angular/core';
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
export class CardComponent implements OnInit{
  constructor(
    private taskService: TaskService,
//    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input() task: Task;


  goBack(): void {
    this.location.back();
  }

  /*save(): void {
    this.heroService.update(this.task)
      .then(() => this.goBack());
  }*/




  ngOnInit(): void {
    /*this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.task = hero);*/
   //this.task = {id: 1, name: "Title", description: "desc", estimate: 10, state: 0 };
  }

}
