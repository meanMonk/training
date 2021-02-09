import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-listing',
  templateUrl: './pipe-listing.component.html',
  styleUrls: ['./pipe-listing.component.scss'],
})
export class PipeListingComponent implements OnInit {
  currentDate: Date = new Date();
  totalAmount: number = 34567;
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ';
  user: any = [
    {
      userName: 'John',
      name: 'John Doe',
      email: 'john@doe.com',
      age: 120,
    },
    {
      userName: 'John',
      name: 'John Doe',
      email: 'john@doe.com',
      age: 120,
    },
  ];

  title: string = 'I am learning angular!';
  result: string = '';

  constructor() {}

  addDecoration() {
    const result = this.title
      .split(' ')
      .map((i) => {
        return `__${i}__`;
      })
      .join(' ');
    console.log('result', result);
    this.result = result;
  }

  ngOnInit(): void {}
}
