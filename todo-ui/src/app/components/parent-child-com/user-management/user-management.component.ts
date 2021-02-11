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
  userList: Array<User> = [
    {
      id: '6024a033ec4cfe2f7238aa68',
      picture: 'http://placehold.it/32x32',
      score: 79,
      name: 'Hyde Ortega',
      email: 'hydeortega@pearlessa.com',
      phone: '+1 (873) 416-2162',
      city: 'Beason',
    },
    {
      id: '6024a033c0031fc483f5c66a',
      picture: 'http://placehold.it/32x32',
      score: 46,
      name: 'Sheryl Owen',
      email: 'sherylowen@pearlessa.com',
      phone: '+1 (977) 592-3198',
      city: 'Winfred',
    },
    {
      id: '6024a033a2f3f9a6b0f2ff46',
      picture: 'http://placehold.it/32x32',
      score: 45,
      name: 'Vilma Dillard',
      email: 'vilmadillard@pearlessa.com',
      phone: '+1 (970) 469-3691',
      city: 'Limestone',
    },
    {
      id: '6024a03370072be5959cfaf7',
      picture: 'http://placehold.it/32x32',
      score: 24,
      name: 'Bowman Kelly',
      email: 'bowmankelly@pearlessa.com',
      phone: '+1 (837) 597-2799',
      city: 'Dale',
    },
    {
      id: '6024a033f0d76721082d473e',
      picture: 'http://placehold.it/32x32',
      score: 53,
      name: 'Merritt Tate',
      email: 'merritttate@pearlessa.com',
      phone: '+1 (945) 457-2269',
      city: 'Jardine',
    },
    {
      id: '6024a03326312271d5ecec43',
      picture: 'http://placehold.it/32x32',
      score: 96,
      name: 'Marva Roy',
      email: 'marvaroy@pearlessa.com',
      phone: '+1 (861) 409-2446',
      city: 'Tetherow',
    },
  ];

  selectedUser: User | null = null;

  constructor() {}

  ngOnInit(): void {}

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}
