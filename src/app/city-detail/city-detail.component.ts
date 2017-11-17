import { Component, OnInit,Input } from '@angular/core';
import {City} from '../city';
import {CityService} from '../city.service';
import{ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import{Http,Response} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  cityHumid='';
  constructor(private route:ActivatedRoute,
  private cityService:CityService,
  private location:Location,private http:HttpClient) { }
@Input() city:City;
  ngOnInit() :void {
  this.getCity();
  }
  getCity():void{
  const name=""+this.route.snapshot.paramMap.get('name');
  this.cityService.getCity(name).subscribe(city=>this.city=city);
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=364ced68e6688f447e02f5180982bc43').subscribe(
(res:Response)=>{
  const weatherCity=res;
  console.log(weatherCity);
  this.cityHumid=weatherCity.main.humidity;

}

  )
  }
  goBack():void{
  this.location.back();
  }

}
