import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-mng',
  templateUrl: './user-mng.component.html',
  styleUrls: ['./user-mng.component.scss'],
})
export class UserMngComponent implements OnInit {
  userDataList: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  saveUser(formValue: any) {
    this.userDataList.push(formValue);
  }

  onUserDelete(user: any) {
    console.log('change', user);
    this.userDataList = this.userDataList.filter(
      (item) => item.userName !== user.userName
    );
  }
}
