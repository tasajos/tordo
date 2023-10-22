import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lrpasajeros',
  templateUrl: './lrpasajeros.component.html',
  styleUrls: ['./lrpasajeros.component.css']
})
export class LrpasajerosComponent implements OnInit {

  passengerCount: number = 0;


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const count = this.route.snapshot.paramMap.get('count');
    this.passengerCount = count ? +count : 0;
  }
  
}