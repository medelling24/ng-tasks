import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { CardComponent } from './cards/card.component';
import { TaskService } from './task.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DragulaModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  exports: [ RouterModule ],
  providers: [ TaskService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
