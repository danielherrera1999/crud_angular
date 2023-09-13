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

  // POST DATA IN LOCAL STORAGE
  save(key: string, data: any): any {
    // Obtener los datos existentes del almacenamiento local, si los hay
    const existingData = this.localStorage.getItem(key);
    let dataArray: Object[] = [];

    if (existingData) {
      dataArray = JSON.parse(existingData);
    }

    // Obtener el último ID asignado o establecerlo en 0 si es la primera vez
    let lastId = this.localStorage.getItem('lastId');
    if (!lastId) {
      lastId = '0';
    }

    // Incrementar el último ID y asignarlo al nuevo objeto
    const newId = (parseInt(lastId) + 1).toString();
    data['id'] = newId;

    // Agregar el nuevo objeto al arreglo
    dataArray.push(data);

    // Guardar el arreglo actualizado en el almacenamiento local
    this.localStorage.setItem(key, JSON.stringify(dataArray));

    // Actualizar el último ID asignado
    this.localStorage.setItem('lastId', newId);

    return data;
  }

  // GET TO DATA OF LOCALSTORAGE
  get(key: string): any[] {
    const data = this.localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  //PUT THE DATA OF LOCALSTORAGE
  edit(key: string, objectId: string, newData: Object): any {
    const dataArray = this.get(key);

    if (dataArray) {
      // Encuentra el índice del objeto que deseas editar
      const index = dataArray.findIndex((item: any) => item.id === objectId);

      if (index !== -1) {
        // Realiza la edición en el objeto específico
        dataArray[index] = { ...dataArray[index], ...newData };

        // Guarda el arreglo actualizado en el localStorage
        this.save(key, dataArray);
      }
    }

    return dataArray
  }

  // Eliminar un objeto del almacenamiento local
  remove(key: string): void {
    this.localStorage.removeItem(key);
  }
}
