import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName = '';

  changeName(userName: string) {
    console.log(userName);
    this.userName = userName;
  }
}
