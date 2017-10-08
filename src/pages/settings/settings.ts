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
    private storage:Storage,  private weatherProvider:WeatherProvider, 
    private realWeatherProvider:RealWeatherProvider, 
  ) {

    this.storage.get('location').then((val)=>{
      if(val!= null){
        this.address = val;
      }
      else{
        this.address = 'Rajpura';
      }
      this.storage.clear(); 
      
    });
  }

  saveForm(){
    let address = this.address;
    this.storage.set('location',this.address);
    this.storage.get('location').then((val)=>{
      if(val!=null)
      {
        console.log('val is not null and printing current value');
        console.log(val);
        this.storage.set('location', this.address);

      }
      else{
        
        console.log('val is null and setting...');
        this.storage.set('location',this.address);
        console.log(this.address);
      }
    });
    // this.storage.get('location').then((val)=>{
    //   this.address = val;
    // });
    

    
    this.navCtrl.push(HomePage);  
  }

}
