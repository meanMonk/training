import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppFormService } from 'src/app/services/app-form.service';
import { ApplicationsService } from 'src/app/services/data/applications.service';

@Component({
  selector: 'app-user-application-form',
  templateUrl: './user-application-form.component.html',
  styleUrls: ['./user-application-form.component.scss'],
})
export class UserApplicationFormComponent implements OnInit {
  public appForm!: FormGroup;
  public stateList: Array<string> = [];
  public cityList: Array<string> = [];

  constructor(
    private fb: FormBuilder,
    private appFormService: AppFormService,
    private AppService: ApplicationsService
  ) {
    this.stateList = appFormService.getStateList();
  }

  ngOnInit(): void {
    console.log(this.stateList);
    this.initAppForm();
  }

  initAppForm() {
    this.appForm = this.fb.group({
      fullname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      classlist: this.fb.array([]),
    });
    this.addClass();
    this.listenToStateChange();
  }

  listenToStateChange() {
    this.appForm.controls.state.valueChanges.subscribe((res) => {
      this.cityList = this.appFormService.getCityList(res);
    });
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

  removeClass(index: any) {
    let control = <FormArray>this.appForm.controls.classlist;
    control.removeAt(index);
  }

  getClassListControls() {
    return (this.appForm.get('classlist') as FormArray).controls;
  }

  getSubjectListControls(standForm: any) {
    return (standForm.get('subjectlist') as FormArray).controls;
  }

  addSubject(standForm: any) {
    const formControls = (standForm.get('subjectlist') as FormArray).controls;
    formControls.push(
      this.fb.group({
        subjectName: '',
        mark: '',
      })
    );
  }

  removeSubject(standardForm: any, index: any) {
    // const subjectlistControl = classForm.controls.get('subjectlist');
    const subjectlistControls = standardForm.get('subjectlist');
    (subjectlistControls as FormArray).removeAt(index);
  }

  saveUserApplication() {
    console.log(this.appForm.value);
    this.AppService.saveAppForm(this.appForm.value);
  }
}
