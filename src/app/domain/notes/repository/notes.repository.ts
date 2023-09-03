import { NotesDom } from "../model/notes.dom";

export abstract class NotesRepositoryDom {
  abstract list() : Promise<NotesDom[]>;
}
