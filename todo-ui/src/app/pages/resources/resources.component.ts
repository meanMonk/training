import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/services/resource.service';

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
  public displayedColumns = ['id', 'name', 'createdAt', 'updatedAt'];

  constructor(
    private resourceService: ResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllResource();
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

  goToResourceForm() {
    this.router.navigate(['/resource/new']);
  }
}
