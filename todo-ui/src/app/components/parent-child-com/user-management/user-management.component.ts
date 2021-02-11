import { Component, OnInit } from '@angular/core';

interface User {
  id: string;
  picture: string;
  score: number;
  name: string;
  email: string;
  phone: string;
  city: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  currentUser: User | null = {
    id: '6024a033ec4cfe2f7238aa68',
    picture: 'http://placehold.it/32x32',
    score: 79,
    name: 'Hyde Ortega',
    email: 'hydeortega@pearlessa.com',
    phone: '+1 (873) 416-2162',
    city: 'Beason',
  };

  constructor() {}

  ngOnInit(): void {}

  onUserChange(user: any) {
    this.currentUser = user;
  }
}
