import { Injectable } from "@angular/core";
import { Result } from "src/app/core/interceptor/results/result-data";
import { Command } from "src/app/core/interceptor/usecase/command";
import { NotesDom } from "../../model/notes.dom";
import { Failure } from "src/app/core/interceptor/failure/failure";
import { NotesRepositoryDom } from "../../repository/notes.repository";
import { NotesRequestDom } from "../../model/request/notes.request.dom";

@Injectable({
  providedIn: 'root'
})
export class EditNotesUsecaseDom extends Command<Promise<Result<NotesDom, Failure>>, NotesRequestDom> {

  constructor(
    private readonly notesRepositoryDom: NotesRepositoryDom
  ) {
    super();
  }
  execute = async (param: NotesRequestDom): Promise<Result<NotesDom, Failure>> => this.notesRepositoryDom.edit(param);
}
