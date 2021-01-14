import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

type Input = string;
type Note = string;
type Iter = number;

@Injectable({providedIn: NotesService})

export class NotesService {
  public input: Input;
  private note: Note;
  private iter: Iter;

  sbj = new BehaviorSubject<Array<string>>([]);

  add(note: Note) {
    this.note = note;
    this.sbj.subscribe(note => this.sbj.value.push(this.note));
  };

  del(iter: Iter) {
    this.iter = iter;
    this.sbj.subscribe(iter => this.sbj.value.splice(this.iter, 1));
  }
}
