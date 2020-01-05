import { Component, OnInit } from '@angular/core';
import * as grpcWeb from 'grpc-web';
import { WeatherClient } from '../Services/WeatherServiceClientPb';
import { ForecastRequest, ForecastResponse } from '../Services/weather_pb';
import { Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public forecat: ForecastResponse
  public cityName: string = "Lille"

  private searchTerms = new Subject<string>();

  constructor() {
  }

  ngOnInit() {
    this.getForecast(this.cityName);

    //Debounce keyUp for 500ms
    this.searchTerms.pipe(
      debounceTime(500)
    ).subscribe(searchTextValue => {
      this.getForecast(searchTextValue);
    });
  }

  onKeyUp(searchTextValue: string) {
    this.searchTerms.next(searchTextValue);
  }

  getForecast(city: string) {
    let weatherClient = new WeatherClient("http://localhost:8080");
    let request = new ForecastRequest();
    request.setCityname(city);
    console.log(request);
    var call = weatherClient.getForecast(request, null,
      (err: grpcWeb.Error, response: ForecastResponse) => {
        console.log(response);
        console.log(err);
        if (response != null && response.getCity() !== '')
          this.forecat = response;
        else
          this.forecat = null;
      });
    call.on('status', (status: grpcWeb.Status) => {
      // ...
    });
  }

}
