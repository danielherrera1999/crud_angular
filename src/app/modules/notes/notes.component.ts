import { Component, ViewChild, ElementRef } from '@angular/core';
import { ListNotesUsecaseDom } from 'src/app/domain/notes/usecase/queries/list-notes.usecase.dom';
import { NoParams } from "src/app/core/interceptor/usecase/noParams";
import { AddNotesUsecaseDom } from 'src/app/domain/notes/usecase/commands/add-notes.usecase.dom';
import { NotesRequestDom } from 'src/app/domain/notes/model/request/notes.request.dom';
import { Result } from 'src/app/core/interceptor/results/result-data';
import { ServerFailure } from 'src/app/core/interceptor/failure/failure';
import { NotesDom } from 'src/app/domain/notes/model/notes.dom';
import { EditNotesUsecaseDom } from 'src/app/domain/notes/usecase/commands/edit-notes.usecase.dom';
import { DeleteNotesUsecaseDom } from 'src/app/domain/notes/usecase/commands/delete-notes.usecase.dom';




@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {

  constructor(
    private readonly _listNotesUsecaseDom: ListNotesUsecaseDom,
    private readonly _addNotesUsecaseDom: AddNotesUsecaseDom,
    private readonly _editNotesUsecaseDom: EditNotesUsecaseDom,
    private readonly _deleteNotesUsecaseDom: DeleteNotesUsecaseDom,
  ){}

  form: NotesRequestDom = {
    id: null,
    title: '',
    description: '',
    createdAt: new Date(),
    status: true
  }
  modalOpen: boolean = false;
  items: NotesDom[] = [];
  isEdit: boolean = false;

  async ngOnInit() {
    this.getData()
  }

  async save(){
    if(this.isEdit){
      const result = await this._editNotesUsecaseDom.execute(this.form);
      this.result(result);
    }else{
      const result = await this._addNotesUsecaseDom.execute(this.form);
      this.result(result);
    }
  }

  async delete(id: number){
    const result = await this._deleteNotesUsecaseDom.execute(id);
    result.resultRight((_) => {
      console.log(_)
      this.getData();
    })
  }

  async getData(){
    const noParams: NoParams = {};
    const result = await this._listNotesUsecaseDom.execute(noParams)
    result.result((_) => this.items = _ , (err) => this.items = [])
  }

  result(result: Result<Object, ServerFailure>){
    result.result((_) => {
      this.getData()
      console.log(_)
    }, (err) => {
      this.getData()
      console.log(err)
    })
    this.closeModal();
  }

  openModal(data?: NotesDom) {
    if (data !== undefined) {
      this.form = {
        id: data.id,
        title: data.title,
        description: data.description,
        status: data.status,
        createdAt: data.createdAt
      }
    }
    this.modalOpen = true;
  }

  closeModal() {
    this.clearData();
    this.modalOpen = false;
  }

  clearData() {
    this.form = {
      id: null,
      title: '',
      description: '',
      createdAt: new Date(),
      status: true
    }
  }
}
