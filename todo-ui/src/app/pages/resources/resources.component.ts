import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/services/resource.service';
import { ToastrService } from 'ngx-toastr';

export interface Resource {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  public dataSource: Resource[] = [];
  public displayedColumns = ['id', 'name', 'createdAt', 'updatedAt', 'action'];
  public error: string = '';
  constructor(
    private resourceService: ResourceService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllResource();
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  getAllResource() {
    this.resourceService.loadAllResources().subscribe(
      (res: any) => {
        console.log('Loaded resources are!', res);
        this.dataSource = res;
      },
      (err) => {
        console.log('Error occurred while loading resource', err);
      }
    );
  }

  editResource(resource: any) {
    this.resourceService.setSelected(resource);
    this.router.navigate(['/resource/new']);
  }
  removeResource(resource: any) {
    this.resourceService.deleteResource(resource.id).subscribe(
      (res) => {
        console.log('removed resource!', res);
        this.toastr.success('Resource Removed!', 'Success!');
        this.getAllResource();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  goToResourceForm() {
    this.resourceService.setSelected(null);
    this.router.navigate(['/resource/new']);
  }
}
