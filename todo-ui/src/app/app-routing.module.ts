import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {
  OneWayDataBindingComponent,
  TwoDataBindingComponent,
} from './components';
import { SalesFormsComponent } from './components/forms/model-driven/sales-forms/sales-forms.component';
import { UserApplicationFormComponent } from './components/forms/nested-forms/user-application-form/user-application-form.component';
import { UserManagementComponent } from './components/parent-child-com/user-management/user-management.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';

const routes: Array<Route> = [
  {
    path: 'databinding-1',
    component: OneWayDataBindingComponent,
    data: {
      page: 'sample',
    },
  },
  {
    path: 'databinding-2',
    component: TwoDataBindingComponent,
    data: {
      page: 'DB 2',
    },
  },
  {
    path: 'sales',
    component: SalesFormsComponent,
    data: {
      page: 'Sales route data',
    },
  },
  {
    path: 'feeds',
    component: SocialFeedComponent,
  },
  {
    path: 'usermanagement',
    component: UserManagementComponent,
  },
  {
    path: 'applicationform',
    component: UserApplicationFormComponent,
  },
  {
    path: '**',
    redirectTo: 'usermanagement',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
