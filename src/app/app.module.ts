import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherService } from './services/weather.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    WeatherItemComponent,
    WeatherSearchComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ WeatherService,ProfileService ],
  bootstrap: [WeatherItemComponent]
})
export class AppModule { }
