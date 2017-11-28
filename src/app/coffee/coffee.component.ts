import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee } from '../../model/Coffee';
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

  constructor(private route: ActivatedRoute) { }
  routingSubscrition: any;

  ngOnInit() {
    // Sauvegarde le l'ID d'un caffé pour une modification ou supression ou etc ...
    this.coffee= new Coffee();
    this.routingSubscrition =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      })

  }
  ngOnDestroy() {
    this.routingSubscrition.unsubscribe();
  }
}
