import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { UserList } from 'src/app/shared/utils/userlist.data';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
})
export class UserListingComponent implements OnInit {
  @Output() onSelect: EventEmitter<User> = new EventEmitter();

  userList: Array<User> = UserList;

  selectedUser: User | null = null;

  constructor() {}

  ngOnInit(): void {}

  onSelectUser(user: User) {
    this.selectedUser = user;
    // trigger emit even from child to parent
    this.onSelect.emit(user);
  }
}
