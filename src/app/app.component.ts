import { Component } from '@angular/core';
import {NotesService} from './services/app.notesService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public NotesService: NotesService) {
    NotesService.input = this.NotesService.input;
    NotesService.sbj = this.NotesService.sbj;
  }
}
