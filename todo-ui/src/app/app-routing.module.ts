import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {
  OneWayDataBindingComponent,
  TwoDataBindingComponent,
} from './components';
import { SalesFormsComponent } from './components/forms/model-driven/sales-forms/sales-forms.component';
import { UserApplicationFormComponent } from './components/forms/nested-forms/user-application-form/user-application-form.component';
import { UserManagementComponent } from './components/parent-child-com/user-management/user-management.component';
import { ResourceFormComponent } from './components/resource-form/resource-form.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';
import { UsersListingComponent } from './components/social-feed/users-listing/users-listing.component';
import { ResourcesComponent } from './pages/resources/resources.component';

const routes: Array<Route> = [
  {
    path: '',
    redirectTo: 'resource',
    pathMatch: 'full',
  },
  {
    path: 'resource',
    children: [
      {
        path: '',
        component: ResourcesComponent,
      },
      {
        path: 'new',
        component: ResourceFormComponent,
      },
    ],
  },
  {
    path: 'databinding-2',
    component: TwoDataBindingComponent,
  },
  {
    path: 'sales',
    component: SalesFormsComponent,
  },
  {
    path: 'feeds',
    children: [
      {
        path: '',
        component: UsersListingComponent,
      },
      {
        path: 'posts/:id',
        component: SocialFeedComponent,
      },
    ],
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
