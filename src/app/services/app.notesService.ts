import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

type Input = string;
type Note = string;
type Iter = number;

@Injectable({providedIn: NotesService})

export class NotesService {
  public input: Input;
  public notes = JSON.parse(localStorage.getItem('notes'));
  public sbj = new BehaviorSubject<Array<string>>([]);

  store() {
    let notes = JSON.stringify(this.sbj.value);
    localStorage.setItem('key', notes);
  };

  add(note: Note) {
    this.sbj.next(this.sbj.value.concat(note));
  };

  del(iter: Iter) {
    let newNotes = [...this.sbj.value].splice(iter, 1)
    this.sbj.next(newNotes);
  }
};
