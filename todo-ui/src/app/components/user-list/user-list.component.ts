import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  phone: string;
  city?: string;
  score: number;
  _id: string;
  picture: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: Array<User> = [
    {
      _id: '601ccc7b0e0adb821ce10b76',
      picture: 'http://placehold.it/50x50',
      score: 93,
      name: 'Mcpherson Flores',
      email: 'mcphersonflores@signidyne.com',
      phone: '+1 (966) 429-3313',
      city: 'Bradenville',
    },
    {
      _id: '601ccc7be79391095b7c7026',
      picture: 'http://placehold.it/50x50',
      score: 47,
      name: 'Evans Hess',
      email: 'evanshess@signidyne.com',
      phone: '+1 (946) 525-3223',
      city: 'Grantville',
    },
    {
      _id: '601ccc7baa03bdd231ccc216',
      picture: 'http://placehold.it/50x50',
      score: 51,
      name: 'Adkins Good',
      email: 'adkinsgood@signidyne.com',
      phone: '+1 (822) 485-2850',
      city: 'Woodburn',
    },
    {
      _id: '601ccc7b4f943b4378f174f1',
      picture: 'http://placehold.it/50x50',
      score: 97,
      name: 'Ophelia Cummings',
      email: 'opheliacummings@signidyne.com',
      phone: '+1 (962) 592-2461',
      city: 'Cumberland',
    },
    {
      _id: '601ccc7b46fa9c142b31e6bf',
      picture: 'http://placehold.it/50x50',
      score: 91,
      name: 'Hopkins Faulkner',
      email: 'hopkinsfaulkner@signidyne.com',
      phone: '+1 (950) 416-3058',
      city: 'Fillmore',
    },
    {
      _id: '601ccc7b38c8c3b6ff028d6e',
      picture: 'http://placehold.it/50x50',
      score: 68,
      name: 'Hunter Rosa',
      email: 'hunterrosa@signidyne.com',
      phone: '+1 (922) 529-3964',
      city: 'Sugartown',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
