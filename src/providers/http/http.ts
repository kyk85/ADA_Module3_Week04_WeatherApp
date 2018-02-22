import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { LocationProvider } from '../../providers/location/location'

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  cities

  lat
  long

  constructor(public http: HttpClient, public locProv:LocationProvider) {
    console.log('Hello HttpProvider Provider');
  }

  getCities(lat,long){
    /*const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };*/
  
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+long+'&cnt=10&appid=9fd7a449d055dba26a982a3220f32aa2')
      .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          resolve(data);
          //this.cities=data
          //console.log(this.cities)
        });
    });
  }
}
