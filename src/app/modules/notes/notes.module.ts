import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/core/utils/modal/modal.module';


@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotesComponent,
      },
    ]),
  ],
  exports: [NotesComponent]
})
export class NotesModule { }
