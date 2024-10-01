import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {


  private apiKey = "fbe9c597269cda2061d0097c4f7762af"
  constructor(private httpClient: HttpClient) {}

  getWeather(city: string): Observable<any>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.httpClient.get(url);
  }
}
