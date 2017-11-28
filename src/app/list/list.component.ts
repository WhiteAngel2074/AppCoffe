import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Coffee } from '../../model/Coffee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // injecter la dataService
  list: [Coffee];
  constructor(private data: DataService , private router: Router) { }

  goDetail(coffee : Coffee){
    this.router.navigate(["/coffee", coffee._id])
  }

  ngOnInit() {
    //get the list
    this.data.getList(list => {
      this.list = list;
    })
  }

}
