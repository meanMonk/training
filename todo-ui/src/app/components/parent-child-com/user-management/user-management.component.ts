import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  currentUser: User | null = null;

  constructor() {}

  ngOnInit(): void {}

  onUserChange(user: User) {
    this.currentUser = user;
  }
}
