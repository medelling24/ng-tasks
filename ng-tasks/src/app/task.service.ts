import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Task } from './task';

@Injectable()
export class TaskService {
  private url = 'http://localhost:3000/';  // URL to web api

  constructor(private http: Http) { }
  getTasks(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  private headers = new Headers({'Content-Type': 'application/json'});
  update(id: number, state: number): Promise<any> {
    const url = `${this.url}${id}`;
    return this.http
      .put(url, JSON.stringify({state: state}), {headers: this.headers})
      .toPromise()
      .then( res => res.json().data )
      .catch(this.handleError);
  }

  create(task: Task): Promise<any> {
    return this.http
      .post(this.url, JSON.stringify({title: task.name, time: task.estimate, description: task.description, state: task.state}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<any> {
    const url = `${this.url}${id}`;
    return this.http
      .put(url, JSON.stringify({}), {headers: this.headers})
      .toPromise()
      .then( res => res.json().data )
      .catch(this.handleError);
  }


}
