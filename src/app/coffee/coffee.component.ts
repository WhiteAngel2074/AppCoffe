import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  constructor( private route : ActivatedRoute) { }
  routingSubscrition : any;

  ngOnInit() {
    // Sauvegarde le l'ID d'un caffé pour une modification ou supression ou etc ...
this.routingSubscrition =
this.route.params.subscribe(params =>{
  console.log(params["id"]);
})

  }
ngOnDestroy(){
  this.routingSubscrition.unsubscribe();
}
}
