import { Injectable } from '@angular/core';
import {PlaceLocation} from '../model/PlaceLocation';

@Injectable()
export class GeolocationService {

  constructor() { }

  // Demander la localisation exacte du l'utilisateur !
  reqestLocation(callback) {
    //W3C Geolocation API
    navigator.geolocation.getCurrentPosition(position => {
      callback(position.coords);
    },
      error => {
        callback(null);
      })
  }

  getMapLink(location: PlaceLocation) {
    // Universal Link " envoi vers google map ou Apple Map"
    let query = "";
    if (location.latitude) {
      console.log(location.latitude);
      query = location.latitude + "," + location.longitude;
    } else {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        return `https://maps.apple.com/?q=${query}`;
      } else {
        return `https://maps.google.com/?q=${query}`;
      }
    }
  }

}
