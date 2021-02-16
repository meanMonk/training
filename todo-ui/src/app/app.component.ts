import { Component } from '@angular/core';
import { TextDesignPipe } from './shared/pipes/text-design.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public chocolate: any = 'Alpanlibe';
  public greet: any = 'Hello Worlds';
  public message: any = 'Nothing special only pipe';

  constructor(private textDesing: TextDesignPipe) {
    this.chocolate = this.textDesing.transform(this.chocolate, 'a', 'blue');
    this.greet = this.textDesing.transform(this.greet, 'l', 'red');
    this.message = this.textDesing.transform(this.message, 'i', 'gree');
  }

  

}
