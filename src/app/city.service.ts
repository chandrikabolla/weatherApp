import { Injectable } from '@angular/core';
import {City} from './city';
import {CITIES} from './mock-cities';
import{Observable} from 'rxjs/Observable';
import{of} from 'rxjs/observable/of';
@Injectable()
export class CityService {

  constructor() { }

  getCities():Observable<City[]>{
  return of(CITIES);
  }
  getCity(name:string):Observable<City>{
  return of(CITIES.find(city=>city.name === name));
  }
}
