import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";

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
    this.storage.set('location',address); 
    // this.storage.get('location').then((val)=>{
    //   this.address = val;
    // });
    

    
    this.navCtrl.push(HomePage);  
  }

}
