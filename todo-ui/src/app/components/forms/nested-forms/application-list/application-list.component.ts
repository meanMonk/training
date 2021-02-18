import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from 'src/app/services/data/applications.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss'],
})
export class ApplicationListComponent implements OnInit {
  applicationsList: Array<any> = [];
  constructor(private appService: ApplicationsService) {}

  ngOnInit(): void {
    this.applicationsList = this.appService.getApplication();
  }

  deleteUser(index: any) {
    this.applicationsList = this.appService.removeUser(index);
  }
}
