import { Injectable } from '@angular/core';
import { NotesDto } from '../models/notes.dto';
import { NotesDom } from 'src/app/domain/notes/model/notes.dom';

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
  }
}
