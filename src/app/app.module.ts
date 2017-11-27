import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';
import { KahwaComponent } from './kahwa/kahwa.component';

import 'hammerjs';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';
@NgModule({
  declarations: [
    AppComponent,
    KahwaComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MatButtonModule, MatCheckboxModule,MatToolbarModule
  ],
  providers: [GeolocationService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
