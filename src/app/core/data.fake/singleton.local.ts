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
  edit(key: string, objectId: string, newData: any): any {
    console.log(objectId);

    const dataArray = this.get(key);
    if (dataArray && dataArray.length > 0) {
      //console.log(dataArray.find((_) => _.id = newData.id));
      const index = dataArray.findIndex((_) => _.id == newData.id)
      if (index !== -1) {
        // Reemplaza el objeto antiguo con el nuevo objeto actualizado
        dataArray[index] = { ...dataArray[index], ...newData };

        this.localStorage.setItem(key, JSON.stringify(dataArray));
      }
    }
    return newData
  }

  // Eliminar un objeto del almacenamiento local
  remove(key: string): void {
    this.localStorage.removeItem(key);
  }

  deleteItem(key: string, objectId: string): void {
    // Obtén el array existente del localStorage
    const dataArray = this.get(key);

    if (dataArray && dataArray.length > 0) {
      // Encuentra el índice del objeto que deseas eliminar
      const index = dataArray.findIndex((item: any) => item.id === objectId);

      if (index !== -1) {
        // Usa el método splice() para eliminar el elemento en el índice encontrado
        dataArray.splice(index, 1);

        // Guarda el array actualizado en el localStorage
        this.localStorage.setItem(key, JSON.stringify(dataArray));
      }
    }
  }
}
