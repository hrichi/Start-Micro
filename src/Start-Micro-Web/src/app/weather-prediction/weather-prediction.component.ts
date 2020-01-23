import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherPredictionService } from '../Services/weather-prediction.service'

@Component({
  selector: 'app-weather-prediction',
  templateUrl: './weather-prediction.component.html',
  styleUrls: ['./weather-prediction.component.scss']
})
export class WeatherPredictionComponent implements OnInit {

  file: any;
  weather: string;
  imageSrc: string;

  constructor(private weatherPrediction: WeatherPredictionService) { }

  uploadForm = new FormGroup({});

  ngOnInit() {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.sendFile();
    }
  }

  sendFile() {
    const data: FormData = new FormData();
    data.append(`file`, this.file, this.file.name);
    this.weatherPrediction.Predict(data).subscribe(value => {
      this.weather = value;
    });
  }

}
