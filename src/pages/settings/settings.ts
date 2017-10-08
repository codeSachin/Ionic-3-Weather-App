import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";
import { WeatherProvider } from '../../providers/weather/weather';
import { RealWeatherProvider } from '../../providers/real-weather/real-weather';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  address:string;
  weather:any;
  lat;
  lng;
  temperature;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage:Storage,
    private weatherProvider:WeatherProvider, 
    private realWeatherProvider:RealWeatherProvider,
  ) {
    this.storage.get('location').then((val)=>{
      if(val!= null){
        let address = val;
        this.address = address;
      }
      else{
        this.address = 'Rajpura';
      }
    })
  }

  saveForm(){
    this.storage.set('location',null); 
    
    let address = this.address;
    this.storage.set('location',address); 
    // this.storage.get('location').then((val)=>{
    //   this.address = val;
    // });
    this.weatherProvider.getLocation().subscribe(res => {
      console.log(res);
      this.address = res.results[0].formatted_address;
      console.log(this.address);
      this.lat = res.results[0].geometry.location.lat;
      this.lng = res.results[0].geometry.location.lng;
      console.log(this.lat);
      console.log(this.lng);
    
    
    this.realWeatherProvider.getWeather(this.lat, this.lng).subscribe(weather=>{
      console.log(weather);
      this.weather = weather;
    })
    
      
    })


    

    
    this.navCtrl.push(HomePage);  
  }

}
