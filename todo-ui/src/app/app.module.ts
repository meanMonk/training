import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    OneWayDataBindingComponent,
    TwoDataBindingComponent,
    PipeListingComponent,
    TextDecoratePipe,
    LearnDirectiveComponent,
    UserManagementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  exports: [TextDecoratePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
