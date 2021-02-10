import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-directive',
  templateUrl: './learn-directive.component.html',
  styleUrls: ['./learn-directive.component.scss'],
})
export class LearnDirectiveComponent implements OnInit {
  selectedDirective: string = 'structural';
  currenthoverElement: string = ''
  strDirectives: Array<string> = [
    'Ng If',
    'Ng for',
    'Ng Switch',
    'Ng SwitchCase',
    'Ng SwitchDefault',
    'Ng Plural',
    'Ng CmponentOutlet',
    'Ng TemplateOutlet',
  ];

  atrDirective: Array<string> = ['Ng Class', 'Ng Style'];

  constructor() {}

  ngOnInit(): void {}

  onChangeDirective(param: string) {
    this.selectedDirective = param;
  }
}
