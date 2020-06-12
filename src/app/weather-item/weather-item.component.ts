import { WeatherService } from './../services/weather.service';
import { WeatherCard } from './../weather-card';
import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.sass']
})
export class WeatherItemComponent implements OnInit {

  weatherItems : WeatherCard [] = [];

  constructor(private weatherServ: WeatherService) {
  }

  ngOnInit() {
    this.weatherItems = this.weatherServ.getWeatherItems();
  }

  // testOf(){
  //   of(100,'angular',true).subscribe(
  //     res=> console.log('Result ' + res),
  //     er=>console.log('Error ' + er)
  //   );
  // }

  // testIntervalTake(){
  //   interval(1000).pipe(take(3)).subscribe(
  //     x=> console.log(x),
  //     error=> console.log(error),
  //     ()=>console.log('Done')
  //   );
  // }

}
