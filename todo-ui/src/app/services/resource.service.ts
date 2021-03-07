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
    const token = localStorage.getItem('ACT');
    return this.http.get('http://localhost:8080/api/resources', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  // loadSingleResource

  // createResource
  createResource(payload: any) {
    const token = localStorage.getItem('ACT');
    return this.http.post('http://localhost:8080/api/resource', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  /**
   * Assignment
   *
   */
  // updateResource
  updateResource(id: any, payload: any) {
    const token = localStorage.getItem('ACT');
    return this.http.put(`http://localhost:8080/api/resources/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // deleteResource
  deleteResource(id: any) {
    const token = localStorage.getItem('ACT');
    return this.http.delete(`http://localhost:8080/api/resources/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
