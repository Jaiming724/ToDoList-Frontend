export class Task {
  id?: number;
  text: string;
  date: string;
  completed: boolean;


  constructor(text: string, day: string, shouldRemind: boolean) {
    this.text = text;
    this.date = day;
    this.completed = shouldRemind;
  }

}
