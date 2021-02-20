import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocialFeedService } from 'src/app/services/feed/social-feed.service';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss'],
})
export class SocialFeedComponent implements OnInit {
  postList!: Observable<any>;
  selectedUser: any;

  constructor(
    private sfService: SocialFeedService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.getPostList(params.id);
    });
  }

  ngOnInit(): void {}

  getPostList(id: any) {
    this.postList = this.sfService.loadPostList(id);
  }

  gotBack() {
    this.router.navigate(['/feeds']);
  }
}
