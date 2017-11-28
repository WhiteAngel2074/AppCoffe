import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatCardModule, MatIconModule, MatInputModule,MatSelectModule,
  MatSliderModule,MatSlideToggleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';
import { KahwaComponent } from './kahwa/kahwa.component';

import 'hammerjs';

import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';
const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'coffee/:id', component: CoffeeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    KahwaComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule, MatIconModule,
    MatInputModule,MatSelectModule,MatSliderModule,MatSlideToggleModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
