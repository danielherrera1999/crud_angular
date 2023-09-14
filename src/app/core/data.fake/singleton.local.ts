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
    // Fetch existing data from local storage, if any
    const existingData = this.localStorage.getItem(key);
    let dataArray: Object[] = [];

    if (existingData) {
      dataArray = JSON.parse(existingData);
    }

    // Get the last assigned ID or set it to 0 if it is the first time.
    let lastId = this.localStorage.getItem('lastId');
    if (!lastId) {
      lastId = '0';
    }

    // increment the last ID and assign it to the new object
    const newId = (parseInt(lastId) + 1).toString();
    data['id'] = newId;

    dataArray.push(data);

    // Save the updated array to local storage
    this.localStorage.setItem(key, JSON.stringify(dataArray));

    // Update the last assigned ID
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
      const index = dataArray.findIndex((_) => _.id == newData.id)
      if (index !== -1) {
        // Replaces the old object with the new updated object
        dataArray[index] = { ...dataArray[index], ...newData };

        this.localStorage.setItem(key, JSON.stringify(dataArray));
      }
    }
    return newData
  }

  // Delete an object from local storage
  remove(key: string): void {
    this.localStorage.removeItem(key);
  }

  deleteItem(key: string, objectId: string): void {
    // Get the existing array from localStorage
    const dataArray = this.get(key);

    if (dataArray && dataArray.length > 0) {
      const index = dataArray.findIndex((item: any) => item.id === objectId);

      if (index !== -1) {
        // Uses the splice() method to remove the element in the index found.
        dataArray.splice(index, 1);

        // Store the updated array in the localStorage
        this.localStorage.setItem(key, JSON.stringify(dataArray));
      }
    }
  }
}
