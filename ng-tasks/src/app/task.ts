export class Task {
  id: number;
  name: string;
  description: string;
  estimate: number;
  state: number;

  constructor() {
    this.id= 0;
    this.name= "";
    this.description= "";
    this.estimate= 0;
    this.state = 0;
  }

}
