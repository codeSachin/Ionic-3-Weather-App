import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";



@Injectable()
export class RealWeatherProvider {
  apiKey =  'cdc0175f095bef46e660650c09bfa175';
  url;
  address;
  encodedAddress
  constructor(public http: Http, private storage:Storage) {
    // console.log('Hello RealWeatherProvider Provider');
    this.storage.get('location').then((val) => {
      if(val!==null){
        this.address = val;
        this.encodedAddress = encodeURIComponent(val);
        
      }
      else{
        this.address = 'Rajpura';
        this.encodedAddress = encodeURIComponent(this.address);
        
      }
     
    });  
  }
  getWeather(lat, lng){

   this.url = 'https://api.forecast.io/forecast/'+this.apiKey+'/'+lat+','+lng;
    return this.http.get(this.url)
    .map(res => res.json());
    // console.log(lat);
    // console.log(lng);

  }

}
