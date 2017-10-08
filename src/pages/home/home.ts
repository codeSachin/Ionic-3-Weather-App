import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { RealWeatherProvider } from '../../providers/real-weather/real-weather';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location;
  lat;
  lng;
  temperature;
  address;

  constructor(public navCtrl: NavController, 
              private weatherProvider:WeatherProvider, 
              private realWeatherProvider:RealWeatherProvider, 
              private storage:Storage
  ) {
    this.weatherProvider.getLocation().subscribe(res => {
      console.log(res);
      this.location = res.results[0].formatted_address;
      this.lat = res.results[0].geometry.location.lat;
      this.lng = res.results[0].geometry.location.lng;
      console.log(this.lat);
      console.log(this.lng);
    
    
    this.realWeatherProvider.getWeather(this.lat, this.lng).subscribe(weather=>{
      console.log(weather);
      this.weather = weather;
    })
    
      
    })


  }
  

}
