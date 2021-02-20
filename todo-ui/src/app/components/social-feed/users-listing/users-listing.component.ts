import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialFeedService } from 'src/app/services/feed/social-feed.service';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss'],
})
export class UsersListingComponent implements OnInit {
  userList: Array<any> = [];
  constructor(private sfService: SocialFeedService, private router: Router) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.sfService.loadUserList().subscribe(
      (res: any) => {
        this.userList = res;
      },
      (err) => {
        console.log('error while loading user!', err);
      }
    );
  }

  selectUser(user: any) {
    console.log('user', user);
    this.router.navigate(['feeds/posts', user.id]);
  }
}
