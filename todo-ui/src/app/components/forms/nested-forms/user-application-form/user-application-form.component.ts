import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-application-form',
  templateUrl: './user-application-form.component.html',
  styleUrls: ['./user-application-form.component.scss'],
})
export class UserApplicationFormComponent implements OnInit {
  public appForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initAppForm();
  }

  initAppForm() {
    this.appForm = this.fb.group({
      fullname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      classlist: this.fb.array([]),
    });
    this.addClass();
  }

  addClass() {
    let control = <FormArray>this.appForm.controls.classlist;
    control.push(
      this.fb.group({
        classname: [''],
        subjectlist: this.fb.array([
          this.fb.group({
            subjectName: '',
            mark: '',
          }),
        ]),
      })
    );
  }
}
