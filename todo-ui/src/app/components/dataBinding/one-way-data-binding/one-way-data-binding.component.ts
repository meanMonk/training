import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  templateUrl: './one-way-data-binding.component.html',
  styleUrls: ['./one-way-data-binding.component.scss'],
})
export class OneWayDataBindingComponent implements OnInit {
  title: string = 'Learning Angular!';
  color: string = 'blue';
  redColor: string = 'red';
  count: number = 0;
  constructor() {}

  ngOnInit(): void {}

  increaseCount() {
    this.count += 1;
    // this.count = this.count + 1;
  }

  decreaseCount() {
    this.count -= 1;
    // this.count = this.count - 1;
  }
}
