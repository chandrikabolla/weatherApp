import { Component, OnInit } from '@angular/core';
import {City} from '../city';
import {CITIES} from '../mock-cities';
import {CityService} from '../city.service';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

	
	cities:City[];
  constructor(private cityService:CityService) { }

getCities():void{
	this.cityService.getCities().subscribe(cities=>this.cities=cities);
}
  ngOnInit() {
  this.getCities();
  }

}
