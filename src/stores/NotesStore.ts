import { action, observable } from 'mobx';
export interface Note {
  text: string;
  id: number;
}
export class NotesStore {
  @observable public notes = [] as Note[];

  @action.bound
  public addNote(text: string) {
    this.notes.push({ text: text, id: Math.random() * 100 });
  }

  @action.bound
  public removeNote(id: number) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
