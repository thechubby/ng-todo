import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';

@Injectable({providedIn: NotesService})

export class NotesService {
  public input = new FormControl(null, [Validators.required]);
  public sbj = new BehaviorSubject<Array<string>>([]);

/*
  constructor() {
    localStorage.setItem('key', JSON.stringify(notes))
  }
*/

  add(): void {
    this.sbj.next(this.sbj.value.concat([this.input.value]));
  };

  del(iter: number) {
    const newNotes: string[] = [...this.sbj.value];
    newNotes.splice(iter, 1)
    this.sbj.next(newNotes);
  }
};
