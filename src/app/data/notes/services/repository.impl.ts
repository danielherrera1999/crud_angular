import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core/data.fake/singleton.local';
import { AxiosDataSource } from 'src/app/core/interceptor/axios/axios-datasource';
import { Failure, ServerFailure } from 'src/app/core/interceptor/failure/failure';
import { Left, Result, Right } from 'src/app/core/interceptor/results/result-data';
import { NotesDom } from 'src/app/domain/notes/model/notes.dom';
import { NotesRepositoryDom } from 'src/app/domain/notes/repository/notes.repository';
import { NotesDto } from '../models/notes.dto';
import { NotesMapper } from '../mappers/notes.mapper';
import { NotesRequestDom } from 'src/app/domain/notes/model/request/notes.request.dom';

@Injectable({
  providedIn: 'root'
})
export class RepositoryImplService extends AxiosDataSource implements NotesRepositoryDom {
  constructor(private _localStorageService: LocalStorageService) {
    super();
  }

  async list(): Promise<Result<NotesDom[], Failure>> {
    try {
      const res: NotesDto[] = await this._localStorageService.get('notes')
      return new Right<NotesDom[]>(res.map((_) => NotesMapper.mapDTOtoDOM(_)))
    } catch (error) {
      return new Left<ServerFailure>(new ServerFailure(''));
    }
  }

  async add(param: NotesRequestDom): Promise<Result<NotesDom, Failure>> {
    try {
      const res:NotesDto  = await this._localStorageService.save(
        'notes',
        NotesMapper.mapDOMtoDTOAdd(param)
      )
      return new Right<NotesDom>(NotesMapper.mapDTOtoDOM(res))
    } catch (error) {
      return new Left<ServerFailure>(new ServerFailure(''));
    }
  }

  async edit(param: NotesRequestDom): Promise<Result<NotesDom, Failure>> {
    try {
      const res:NotesDto  = await this._localStorageService.edit(
        'notes',
        param.id?.toString() ?? '',
        NotesMapper.mapDOMtoDTOAdd(param)
      )

      return new Right<NotesDom>(NotesMapper.mapDTOtoDOM(res))
    } catch (error) {
      return new Left<ServerFailure>(new ServerFailure(''));
    }
  }
}
