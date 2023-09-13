// local-storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage; // Usar localStorage del navegador
  }

  // Guardar un objeto en el almacenamiento local
  save(key: string, data: Object): void {
    this.localStorage.setItem(key, JSON.stringify(data));
  }

  // Obtener un objeto del almacenamiento local
  get(key: string): any[] {
    const data = this.localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Editar un objeto en el almacenamiento local
  edit(key: string, newData: Object): void {
    const existingData = this.get(key);
    if (existingData) {
      this.save(key, { ...existingData, ...newData });
    }
  }

  // Eliminar un objeto del almacenamiento local
  remove(key: string): void {
    this.localStorage.removeItem(key);
  }
}
