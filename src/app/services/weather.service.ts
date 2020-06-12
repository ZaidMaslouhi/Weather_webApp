import { HttpClient } from '@angular/common/http';
import { WeatherCard } from './../weather-card';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherItems : WeatherCard[] = [];

  constructor(private http: HttpClient) { }

  getWeatherItems(){
    return this.weatherItems;
  }

  setWatherItems(cityName : string): Observable<any>{
    let myApi = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&units=metric&appid=14ae3115d021fc7da3bbe5165c874203';
    return this.http.get(myApi);
  }

  item : WeatherCard = { city: '',description: '',temprature: 0 };
  addWeatherItem(cityName : string){
    this.setWatherItems(cityName).subscribe((dt:any)=>{
      this.item = {
        city: dt.name,
        description: dt.weather[0].description,
        temprature: dt.main.temp
      }
      this.weatherItems.push(this.item);
    });
  }

  clearWeatherItems(){
    this.weatherItems.splice(0);
  }

}

