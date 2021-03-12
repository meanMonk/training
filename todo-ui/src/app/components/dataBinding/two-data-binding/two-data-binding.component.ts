import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from 'src/app/services/data/applications.service';

@Component({
  selector: 'app-two-data-binding',
  templateUrl: './two-data-binding.component.html',
  styleUrls: ['./two-data-binding.component.scss'],
})
export class TwoDataBindingComponent implements OnInit {
  inputValue: string = 'default';
  ngModelValue: string = 'model';
  redColor: string = 'tomato';
  constructor(private appService: ApplicationsService) {}

  ngOnInit(): void {
    console.log('hello');
  }

   

  onInputChange(event: any) {
    this.inputValue = event.target.value;
  }
}
