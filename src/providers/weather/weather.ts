import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  url;
  encodedAddress = encodeURIComponent('Rajpura');

  constructor(public http: Http) {
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
