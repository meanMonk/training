import { Component, EventEmitter, OnInit, Output } from '@angular/core';

class UserFormInput {
  constructor(
    public userName: string,
    public email: string,
    public phone: string,
    public city: string
  ) {}
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() onNewUser: EventEmitter<any> = new EventEmitter();

  userForm: UserFormInput = new UserFormInput('', '', '', '');

  cityList: Array<string> = ['Pune', 'Mumbai', 'Nagpur'];

  constructor() {}

  ngOnInit(): void {}

  submitUser(formValue: UserFormInput) {
    /* console.log('submittedUser', formValue);
    console.log('userForm', this.userForm); */
    this.onNewUser.emit(formValue);
  }
}
