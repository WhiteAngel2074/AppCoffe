import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from '../../model/Coffee';
import { TastingRating } from '../../model/TastingRating';
import { GeolocationService } from '../geolocation.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  coffee: Coffee;
  // quand je fais la modification le Switch doit être actif !
  tastingEnabled: boolean ;

  types = [
    "Espresso",
    "Risteretto",
    "Americano",
    "Cappuccino"
  ];

  constructor(private route: ActivatedRoute,
    private geolocation: GeolocationService,
    private router: Router,
    private data: DataService) { }

  routingSubscrition: any;

  tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null;
    }
  }

  cancel() {
    // retourner à la page précédente !
    this.router.navigate(["/"]);
  }
  save() {
    this.data.save(this.coffee, result => {
      if (result) {
        this.router.navigate(["/"]);
      }
    })
  }
  ngOnInit() {
    // Sauvegarde le l'ID d'un caffé pour une modification ou supression ou etc ...
    this.coffee = new Coffee();
    this.routingSubscrition =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
        if (params["id"]) {
          this.data.get(params["id"], response => {
            this.coffee = response;

            // vérifier si ce caffé a été noté plus ( switch )
            if (this.coffee.tastingRating) {
                this.tastingEnabled =true;
            }
          });
        }
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
