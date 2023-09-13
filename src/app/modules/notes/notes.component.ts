import { Component } from '@angular/core';
import { ListNotesUsecaseDom } from 'src/app/domain/notes/usecase/queries/list-notes.usecase.dom';
import { NoParams } from "src/app/core/interceptor/usecase/noParams";


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  constructor( private readonly _listNotesUsecaseDom: ListNotesUsecaseDom ){
  }

  async ngOnInit() {
    const noParams: NoParams = {};
    const res = await this._listNotesUsecaseDom.execute(noParams)
  }


}
