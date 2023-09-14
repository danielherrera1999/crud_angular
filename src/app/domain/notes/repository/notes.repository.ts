import { Injectable } from "@angular/core";
import { Result } from "src/app/core/interceptor/results/result-data";
import { NotesDom } from "../model/notes.dom";
import { Failure } from "src/app/core/interceptor/failure/failure";
import { NotesRequestDom } from "../model/request/notes.request.dom";


export abstract class NotesRepositoryDom {
  abstract list() : Promise<Result<NotesDom[], Failure>>;
  abstract add(param: NotesRequestDom) : Promise<Result<NotesDom, Failure>>;
  abstract edit(param: NotesRequestDom) : Promise<Result<NotesDom, Failure>>;
  abstract remove(param: Number) : Promise<Result<Boolean, Failure>>;
}
