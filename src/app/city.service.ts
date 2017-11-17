import { Injectable } from '@angular/core';
import {City} from './city';
import {CITIES} from './mock-cities';
import{Observable} from 'rxjs/Observable';
import{of} from 'rxjs/observable/of';
import{Http,Response} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CityService {

  constructor(private http:HttpClient) { }

  getCities():Observable<City[]>{
  return of(CITIES);
  }
  getCity(name:string):Observable<City>{
  this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=364ced68e6688f447e02f5180982bc43').subscribe(
(res:Response)=>{
  const weatherCity=res;
  console.log(weatherCity);
}

  )
  return of(CITIES.find(city=>city.name === name));
  }
}
