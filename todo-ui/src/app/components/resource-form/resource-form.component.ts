import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss'],
})
export class ResourceFormComponent implements OnInit {
  public resourceForm!: FormGroup;
  public data: any;

  constructor(
    private fb: FormBuilder,
    private resourceService: ResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.data = this.resourceService.getSelected();
    if (!!this.data && Object.keys(this.data).length > 0) {
      this.initForm(this.data);
    } else {
      this.initForm({});
    }
  }

  initForm(payload?: any) {
    this.resourceForm = this.fb.group({
      name: [payload.name || '', [Validators.required]],
    });
  }

  saveForm() {
    if (this.resourceForm?.valid) {
      if (!!this.data) {
        this.resourceService.updateResource(this.resourceForm.value).subscribe(
          (res) => {
            console.log('resource update', res);
            this.resourceForm?.reset();
            this.goToResource();
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.resourceService.createResource(this.resourceForm.value).subscribe(
          (res) => {
            console.log('resource created', res);
            this.resourceForm?.reset();
            this.goToResource();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    } else {
      console.error('Invalid forms!');
    }
  }
  goToResource() {
    this.router.navigate(['resource']);
  }
}
