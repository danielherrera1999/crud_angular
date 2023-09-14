import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
