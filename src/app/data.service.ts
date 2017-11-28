import { Injectable } from '@angular/core';
import { Coffee } from '../model/Coffee';
import { PlaceLocation } from '../model/PlaceLocation';
import { Http } from '@angular/http';
@Injectable()
export class DataService {

  public endpoint = "http://localhost:3000"

  constructor(private http: Http) { }
  get(coffeeId : string , callback){
    this.http.get(`${this.endpoint}/coffees/${coffeeId}`)
    .subscribe(response => {
      callback(response.json());
    })
  }
  getList(callback) {

    this.http.get(`${this.endpoint}/coffees`)
      .subscribe(response => {
        console.log(response.json());
        callback(response.json());
      })
    // Array
    // const list = [
    //   new Coffee("Double Expresso", "le 716", new PlaceLocation("17 avenue alger", "tunis", null, null)),
    //   new Coffee("Caramel Americano", "The Square", new PlaceLocation("25 avenue paris", "tunis", null, null))
    // ];
    // callback(list);
  }

  save(coffee, callback) {
  if (coffee._id) {
      //it's an update
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee)
      .subscribe(response => {
        callback(true);
      });
  }else {
    // it's an insert !!
    this.http.post(`${this.endpoint}/coffees`, coffee)
    .subscribe(response => {
      console.log(coffee);
      callback(true);
    });
  }

  }
}
