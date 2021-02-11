import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserList } from 'src/app/shared/utils/userlist.data';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
})
export class UserListingComponent implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  userList: Array<any> = UserList;

  selectedUser: any = {};

  constructor() {}

  ngOnInit(): void {}

  onSelectUser(user: any) {
    this.selectedUser = user;
    // trigger emit even from child to parent
    this.onSelect.emit(user);
  }
}
