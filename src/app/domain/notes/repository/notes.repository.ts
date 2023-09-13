import { Injectable } from "@angular/core";
import { Result } from "src/app/core/interceptor/results/result-data";
import { NotesDom } from "../model/notes.dom";
import { Failure } from "src/app/core/interceptor/failure/failure";


export abstract class NotesRepositoryDom {
  abstract list() : Promise<Result<NotesDom[], Failure>>;
}
