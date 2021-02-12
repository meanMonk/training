import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-data-list',
  templateUrl: './user-data-list.component.html',
  styleUrls: ['./user-data-list.component.scss'],
})
export class UserDataListComponent implements OnInit {
  @Input()
  data: Array<any> = [];
  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete(user: any) {
    this.onDelete.emit(user);
  }
}
