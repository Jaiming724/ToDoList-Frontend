export class Task {
  id?: number;
  text: string;
  day: string;
  completed: boolean;


  constructor(text: string, day: string, shouldRemind: boolean) {
    this.text = text;
    this.day = day;
    this.completed = shouldRemind;
  }

}
