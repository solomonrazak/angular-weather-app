import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherServiceService } from './services/weather-service.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
  city: string = "";  // to store the input city
  weather: any; // to store the weather data being fetched
  
  

  constructor(private weatherService: WeatherServiceService){}

  searchWeather(){
    if(this.city){
      this.weatherService.getWeather(this.city).subscribe(data => {
        this.weather = data;
        console.log(data);
      })
    }

  }
}
