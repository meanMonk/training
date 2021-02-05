import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName: string | null | undefined;

  buttonStyle: any = {};

  constructor() {
    this.userName = null;
  }

  onInputChange(e: any) {
    console.log(e);
  }

  changeName(userName: string | null | undefined) {
    if (userName === 'mango') {
      this.buttonStyle = {
        'font-size': '30px',
        color: 'tomato',
        background: 'white',
      };
    }
    this.userName = userName;
  }
}
