import { TestBed } from '@angular/core/testing';

import { WeatherPredictionService } from './weather-prediction.service';

describe('WeatherPredictionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherPredictionService = TestBed.get(WeatherPredictionService);
    expect(service).toBeTruthy();
  });
});
