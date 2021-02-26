import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  public selectedData: any = null;

  constructor(private http: HttpClient) {}

  getSelected() {
    return this.selectedData;
  }

  setSelected(payload: any) {
    this.selectedData = payload;
  }

  // loadAllResource
  loadAllResources() {
    return this.http.get('http://localhost:8080/api/resources');
  }
  // loadSingleResource

  // createResource
  createResource(payload: any) {
    return this.http.post('http://localhost:8080/api/resource', payload);
  }

  /**
   * Assignment
   *
   */
  // updateResource
  updateResource(payload: any) {
    return this.http.put('http://localhost:8080/api/resource', payload);
  }

  // deleteResource
  deleteResource(id: any) {
    return this.http.delete(`http://localhost:8080/api/resource/${id}`);
  }
}
