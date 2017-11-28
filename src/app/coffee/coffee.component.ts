import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee } from '../../model/Coffee';
import { TastingRating } from '../../model/TastingRating';
import { GeolocationService } from '../geolocation.service';
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  coffee: Coffee;
  types = [
    "Espresso", "Risteretto", "Americano", "Cappuccino"
  ];

  constructor(private route: ActivatedRoute , private geolocation: GeolocationService) { }
  routingSubscrition: any;

tastingRatingChanged(checked:boolean){
  if (checked) {
      this.coffee.tastingRating = new TastingRating();
  }else {
    this.coffee.tastingRating = null;
  }
}

cancel(){
  
}
save(){

}
  ngOnInit() {
    // Sauvegarde le l'ID d'un caffé pour une modification ou supression ou etc ...
    this.coffee = new Coffee();
    this.routingSubscrition =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      });

      // Call API Geolocation
      this.geolocation.reqestLocation(location => {
        if (location) {
            this.coffee.location.latitude = location.latitude;
            this.coffee.location.longitude = location.longitude;
        }
      })

  }
  ngOnDestroy() {
    this.routingSubscrition.unsubscribe();
  }
}
