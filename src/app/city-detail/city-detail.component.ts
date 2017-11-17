import { Component, OnInit,Input } from '@angular/core';
import {City} from '../city';
import {CityService} from '../city.service';
import{ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,
  private cityService:CityService,
  private location:Location) { }
@Input() city:City;
  ngOnInit() :void {
  this.getCity();
  }
  getCity():void{
  const name=""+this.route.snapshot.paramMap.get('name');
  this.cityService.getCity(name).subscribe(city=>this.city=city);
  }
  goBack():void{
  this.location.back();
  }

}
