import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { WeatherPredictionComponent } from './weather-prediction/weather-prediction.component';
import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'weather-prediction', component: WeatherPredictionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherPredictionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        useHash: true
      }
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
