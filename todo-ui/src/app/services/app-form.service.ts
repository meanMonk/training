import { Injectable } from '@angular/core';
import { STATE_LIST } from './data/state';
import { STATE_CITY } from './data/state-city';

@Injectable({
  providedIn: 'root',
})
export class AppFormService {
  statecity: any = STATE_CITY;
  stateList: Array<string> = STATE_LIST;

  constructor() {}

  getCityList(state: string) {
    return this.statecity[state];
  }

  getStateList() {
    return this.stateList;
  }
}
