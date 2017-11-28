import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GeolocationService } from '../geolocation.service';
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
  constructor(
    private data: DataService,
    private router: Router,
    private geolocation: GeolocationService
  ) { }

  goDetail(coffee: Coffee) {
    this.router.navigate(["/coffee", coffee._id])
  }

  goMap(coffee: Coffee) {
    // open Map Application ! just need to change the URL ( iOS , Android )
    const mapUrl = this.geolocation.getMapLink(coffee.location);
    location.href = mapUrl;
  }

  share(coffee: Coffee) {
    const shareText = `J'étais au caffé, ${coffee.place} et je note ${coffee.rating} etoiles`;
    if ('share' in navigator) {
      (navigator as any).share({
        title: coffee.name,
        text: shareText,
        url: window.location.href
      }).then(() => console.log('shared')).catch(() => console.log('error sharing'));
    } else {
      const shareUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareUrl;
    }
  }
  ngOnInit() {
    //get the list
    this.data.getList(list => {
      this.list = list;
    })
  }

}
