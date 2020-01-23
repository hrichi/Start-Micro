import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherPredictionService {

  constructor(private httpClient: HttpClient) {
  }

  Predict(data: FormData): Observable<string> {
    return this.httpClient.post<string>(
      'http://localhost:8083/WeatherPrediction',
      data,
      { responseType: 'text' as 'json' }
    );
  }
}
