import { WeatherService } from './../services/weather.service';
import { Profile } from './../profile';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  profiles: Profile[] = [];

  constructor(private profileServ: ProfileService,private weatherServ: WeatherService) { }

  ngOnInit() {
    this.profiles = this.profileServ.getProfiles;
  }

  saveNewProfile(){
    const cities = this.weatherServ.getWeatherItems().map(x=> x.city);
    this.profileServ.saveNewProfile(cities);
  }

  loadProfile(profile: Profile){
    this.weatherServ.clearWeatherItems();
    for(let i=0; i<profile.cities.length; i++){
      this.weatherServ.addWeatherItem(profile.cities[i]);
    }
  }

  deleteProfile(profile: Profile){
    this.profileServ.deleteProfile(profile);
    this.weatherServ.clearWeatherItems();
  }

}
