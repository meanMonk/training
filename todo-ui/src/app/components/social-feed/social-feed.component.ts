import { Component, OnInit } from '@angular/core';
import { SocialFeedService } from 'src/app/services/feed/social-feed.service';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss'],
})
export class SocialFeedComponent implements OnInit {
  userList: Array<any> = [];
  postList: Array<any> = [];
  selectedUser: any;

  constructor(private sfService: SocialFeedService) {}

  ngOnInit(): void {
    // this.userList = this.sfService.loadUserList();
    this.getUserList();
    this.postList = this.sfService.loadPostList();
  }

  getUserList() {
    this.sfService.loadUserList().subscribe(
      (res: any) => {
        console.log('userLIst', res);
        this.userList = res;
      },
      (err) => {
        console.log('error while loading user!', err);
      }
    );
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
