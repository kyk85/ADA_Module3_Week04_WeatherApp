import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocationProvider } from '../../providers/location/location'
import { HttpProvider } from '../../providers/http/http'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  data

  forecasts

  constructor(public navCtrl: NavController, public locProv:LocationProvider, public httpProv:HttpProvider) {

  }

  ionViewDidLoad(){
    this.locProv.getUserLocation().then((resp)=>{
      this.httpProv.getCities(resp.coords.latitude, resp.coords.longitude).then((resp)=>{
        this.data=resp
        this.forecasts=this.data.list
        console.log(this.data.city.name)
        console.log(this.forecasts)
      }).catch((error)=>{
        console.log(error)
      })
    })
   }
  }
  
