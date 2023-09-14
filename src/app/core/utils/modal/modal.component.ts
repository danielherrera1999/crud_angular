import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalOpen: boolean = false; // Variable para controlar si el modal está abierto
  @Input() modalTitle: string = 'Título del Modal';
  @Output() modalClosed: EventEmitter<void> = new EventEmitter<void>();
  @Output() modalSaved: EventEmitter<void> = new EventEmitter<void>();
  closeModal(): void {
    // Cierra el modal
    this.modalClosed.emit();
  }

  saveModal(): void {
    // Guarda el modal
    this.modalSaved.emit();
  }
}
