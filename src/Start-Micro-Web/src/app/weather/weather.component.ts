import { Component, OnInit } from '@angular/core';
import * as grpcWeb from 'grpc-web';
import { WeatherClient } from '../Services/WeatherServiceClientPb';
import { ForecastRequest, ForecastResponse, ForecastsResponse, Empty } from '../Services/weather_pb';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
 
  forecats:ForecastResponse[];

  constructor() {

    let weatherClient = new WeatherClient("http://localhost:8080");

    var call = weatherClient.getForecasts(new Empty(), null,
      (err: grpcWeb.Error, response: ForecastsResponse) => {
        console.log(response);
        this.forecats = response.getForecastsList();
      });
    call.on('status', (status: grpcWeb.Status) => {
      // ...
    });
  }

  ngOnInit() {
  }

}
