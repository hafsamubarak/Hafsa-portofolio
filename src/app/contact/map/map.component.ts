import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    let loader=new Loader({
      apiKey:'AIzaSyCcY0mOFLPAZEY1VlA-2KCe8S2nXEy_TIw'
    });
    loader.load().then(()=>{
      new google.maps.Map(document.getElementById('map') as HTMLElement,{
        center:{lat:26.8206,lng:30.8025},
        zoom:7,
      });
    });

  }

}
