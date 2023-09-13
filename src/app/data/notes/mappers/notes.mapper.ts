import { Injectable } from '@angular/core';
import { NotesDto } from '../models/notes.dto';
import { NotesDom } from 'src/app/domain/notes/model/notes.dom';
import { NotesRequestDto } from '../models/request/notes.request.dto';
import { NotesRequestDom } from 'src/app/domain/notes/model/request/notes.request.dom';

@Injectable({
  providedIn: 'root'
})
export class NotesMapper {
  static mapDTOtoDOM(dto: NotesDto) : NotesDom {
    const dom: NotesDom = <NotesDom>{
      id: dto.id,
      title: dto.title,
      description: dto.description,
      createdAt: dto.createdAt
    };
    return dom;
  };

  static mapDOMtoDTOAdd(dom: NotesRequestDom) : NotesRequestDto {
    const dto: NotesRequestDto = {
      id: null,
      title: dom.title,
      description: dom.description,
      createdAt: dom.createdAt
    };
    return dto;
  }
}
