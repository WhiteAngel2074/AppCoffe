import { Injectable } from '@angular/core';
import { Coffee } from '../model/Coffee';
import { PlaceLocation } from '../model/PlaceLocation';

@Injectable()
export class DataService {

  constructor() { }
  getList(callback) {
    //TODO: Change it with a real web service !
    // Array
    const list = [
      new Coffee("Double Expresso", "le 716", new PlaceLocation("17 avenue alger", "tunis", null, null)),
      new Coffee("Caramel Americano", "The Square", new PlaceLocation("25 avenue paris", "tunis", null, null))
    ];
    callback(list);
  }
  save(coffee, callback) {
    //TODO: Change it with a real web service !
    callback(true);
  }
}
