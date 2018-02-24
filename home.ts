import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationProvider } from '../../providers/location/location'

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController,
    public locProv:LocationProvider) {

  }

  ionViewDidLoad(){
    this.locProv.getUserLocation().then((resp)=>{
      this.loadMap(resp.coords.latitude, resp.coords.longitude)
    }).catch((error)=>{
      console.log(error)
    })
    
  }
 
  loadMap(lat,long){
 
    let latLng = new google.maps.LatLng(lat, long);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }
}
