import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  address:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.address = 'Rajpura';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
