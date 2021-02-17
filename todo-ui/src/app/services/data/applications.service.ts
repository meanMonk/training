import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  appFormList: Array<any> = [];

  constructor() {}

  getApplication() {
    return this.appFormList;
  }

  saveAppForm(formValue: any) {
    this.appFormList.push(formValue);
  }
}
