import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss'],
})
export class ResourceFormComponent implements OnInit {
  public resourceForm!: FormGroup;
  public data: any;
  public error: any = null;

  constructor(
    private fb: FormBuilder,
    private resourceService: ResourceService,
    private toastr: ToastrService,
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
        this.resourceService
          .updateResource(this.data.id, this.resourceForm.value)
          .subscribe(
            (res) => {
              this.toastr.success('Resource updated!', 'Success!');
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
            this.toastr.success('Resource Created!', 'Success!');
            this.resourceForm?.reset();
            this.goToResource();
          },
          (err) => {
            console.log(err);
            this.error = err.error.message;
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
