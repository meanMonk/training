import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sales-forms',
  templateUrl: './sales-forms.component.html',
  styleUrls: ['./sales-forms.component.scss'],
})
export class SalesFormsComponent implements OnInit {
  public salesForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    /// set the value for variable called sales form
    /// with formGroup class instance.
    this.salesForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  onSalesFormSubmit() {
    if (this.salesForm?.valid) {
      console.log('Value for submit form', this.salesForm?.value);
      // this.sfService.createPost(this.salesForm.value).subscribe((res)=>{
      //   this.submitted= true
      // }, (err)=>{
      //   console.log('err')
      // })
      this.salesForm?.reset();
    } else {
      console.error('Invalid forms!');
    }
  }
}
