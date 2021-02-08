import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayDataBindingComponent } from './components/dataBinding/one-way-data-binding/one-way-data-binding.component';
import { TwoDataBindingComponent } from './components/dataBinding/two-data-binding/two-data-binding.component';
@NgModule({
  declarations: [
    AppComponent,
    OneWayDataBindingComponent,
    TwoDataBindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
