import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  public selectedResource: any = null;

  constructor(private http: HttpClient) {}

  getSelected() {
    return this.selectedResource;
  }

  setSelected(payload: any) {
    this.selectedResource = payload;
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
  updateResource(id: any, payload: any) {
    return this.http.put(`http://localhost:8080/api/resources/${id}`, payload);
  }

  // deleteResource
  deleteResource(id: any) {
    return this.http.delete(`http://localhost:8080/api/resources/${id}`);
  }
}
