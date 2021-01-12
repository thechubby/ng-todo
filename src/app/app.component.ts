import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes = ['Заметка'];
  input: string;
  add(item): void {
    this.notes.push(item);
  }
  del(item): void {
    this.notes.splice(item, 1);
  }
}
