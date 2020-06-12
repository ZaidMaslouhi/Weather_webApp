import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Subject, observable, Observable, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.sass']
})
export class WeatherSearchComponent implements OnInit {

  cities = new Subject<string>();
  data: any={};
  constructor(private weatherServ: WeatherService) { }
  
  onSubmit(f){
    this.weatherServ.addWeatherItem(f.value.cityName);
  }

  getCities(city){
    this.cities.next(city);
  }

  ngOnInit() {
    this.cities.pipe(distinctUntilChanged()).pipe(debounceTime(150))
              .pipe(switchMap((city:string)=> this.weatherServ.setWatherItems(city)))
              .subscribe(data=> this.data = data,error=>console.log(error));
  }

  clearList(){
    this.weatherServ.clearWeatherItems();
  }

}
