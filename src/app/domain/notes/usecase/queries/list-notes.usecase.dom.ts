import { Injectable } from "@angular/core";
import { Result } from "src/app/core/interceptor/results/result-data";
import { Command } from "src/app/core/interceptor/usecase/command";
import { NotesDom } from "../../model/notes.dom";
import { Failure } from "src/app/core/interceptor/failure/failure";
import { NoParams } from "src/app/core/interceptor/usecase/noParams";
import { NotesRepositoryDom } from "../../repository/notes.repository";

@Injectable({
  providedIn: 'root'
})
export class ListNotesUsecaseDom extends Command<Promise<Result<NotesDom[], Failure>>, NoParams> {

  constructor(
    private readonly notesRepositoryDom: NotesRepositoryDom
  ) {
    super();
  }

  async execute(param: NoParams): Promise<Result<NotesDom[], Failure>> {
    console.log('usecase');

    return this.notesRepositoryDom.list()
  }

  // execute = async (param: NoParams): Promise<Result<NotesDom[], Failure>> => this.notesRepositoryDom.list();


}
