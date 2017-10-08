import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";


@Injectable()
export class WeatherProvider {

  url;
  address = 'Rajpura';
  encodedAddress = encodeURIComponent(this.address);

  constructor(public http: Http,
              private storage:Storage) {


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
    console.log('Hello WeatherProvider Provider');
    console.log(this.encodedAddress);
    this.url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.encodedAddress}`;
  }

  getLocation()
  {
    this.url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.encodedAddress}`;
    
    return this.http.get(this.url)
    .map(res => res.json());
  }

 
}
