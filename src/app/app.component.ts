import { Component } from '@angular/core';
import {NotesService} from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesService]
})
export class AppComponent {

  notes$ = this.notesService.sbj;
  input = this.notesService.input

  constructor(private notesService: NotesService) {
  }

  add(): void {
    this.notesService.add();
  }

  del(iter: number): void {
    this.notesService.del(iter);
  }
}
