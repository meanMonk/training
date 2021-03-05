import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.scss'],
})
export class PrivateLayoutComponent implements OnInit {
  public applicationRouteList = [
    {
      path: 'databinding-1',
      label: '1 Data binding',
      iconName: 'fa-dashboard',
    },
    {
      path: 'databinding-2',
      label: '2 Data binding',
      iconName: 'fa-arrows-alt',
    },
    {
      path: 'sales',
      label: 'Sales form',
      iconName: 'fa-address-card',
    },
    {
      path: 'feeds',
      label: 'Social Feeds',
      iconName: 'fa-comments',
    },
    {
      path: 'usermanagement',
      label: 'User management',
      iconName: 'fa-users',
    },
    {
      path: 'applicationform',
      label: 'User application',
      iconName: 'fa-file',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof ActivationEnd) {
        console.log(e);
        console.log(e.snapshot.data);
      }
    });
  }

  ngOnInit(): void {}

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
