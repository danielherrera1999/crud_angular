import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalOpen: boolean = false;
  @Input() modalTitle: string = 'Título del Modal';
  @Output() modalClosed: EventEmitter<void> = new EventEmitter<void>();
  @Output() modalSaved: EventEmitter<void> = new EventEmitter<void>();
  closeModal(): void {
    // Closed the modal
    this.modalClosed.emit();
  }

  saveModal(): void {
    // Save the modal modal
    this.modalSaved.emit();
  }
}
