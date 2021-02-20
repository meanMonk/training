import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { TextDesignPipe } from './shared/pipes/text-design.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  gotoRoute() {
    this.router.navigate(['/usermanagement', 11]);
  }
}
