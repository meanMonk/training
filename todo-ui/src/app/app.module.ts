import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  OneWayDataBindingComponent,
  PipeListingComponent,
  TwoDataBindingComponent,
  LearnDirectiveComponent,
} from './components';
import { TextDecoratePipe } from './shared/pipes/text-decorate.pipe';
import { UserManagementComponent } from './components/parent-child-com/user-management/user-management.component';
import { UserProfileComponent } from './components/parent-child-com/user-profile/user-profile.component';
import { UserListingComponent } from './components/parent-child-com/user-listing/user-listing.component';
import { UserFormComponent } from './components/forms/template-driven-day-10/user-form/user-form.component';
import { UserMngComponent } from './components/forms/template-driven-day-10/user-mng/user-mng.component';
import { UserDataListComponent } from './components/forms/template-driven-day-10/user-data-list/user-data-list.component';
import { SalesFormsComponent } from './components/forms/model-driven/sales-forms/sales-forms.component';
import { LoginComponent } from './pages/login/login.component';
import { TextDesignPipe } from './shared/pipes/text-design.pipe';
import { UserApplicationFormComponent } from './components/forms/nested-forms/user-application-form/user-application-form.component';
import { AppFormService } from './services/app-form.service';
import { ApplicationsService } from './services/data/applications.service';
import { ApplicationListComponent } from './components/forms/nested-forms/application-list/application-list.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';
import { SocialFeedService } from './services/feed/social-feed.service';
import { UsersListingComponent } from './components/social-feed/users-listing/users-listing.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourceService } from './services/resource.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ResourceFormComponent } from './components/resource-form/resource-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    OneWayDataBindingComponent,
    TwoDataBindingComponent,
    PipeListingComponent,
    TextDecoratePipe,
    LearnDirectiveComponent,
    UserManagementComponent,
    UserProfileComponent,
    UserListingComponent,
    UserFormComponent,
    UserMngComponent,
    UserDataListComponent,
    SalesFormsComponent,
    LoginComponent,
    TextDesignPipe,
    UserApplicationFormComponent,
    ApplicationListComponent,
    SocialFeedComponent,
    UsersListingComponent,
    ResourcesComponent,
    ResourceFormComponent,
    PrivateLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    TextDesignPipe,
    AppFormService,
    ApplicationsService,
    SocialFeedService,
    ResourceService,
    AuthService,
    AuthGuard,
  ],
  exports: [TextDecoratePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
