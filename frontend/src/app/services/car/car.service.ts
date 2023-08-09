import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../../models/car";
import {allCarsUrl} from "../../models/urls";
@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(
    private httpClient: HttpClient
  ) { }


  getCars(): Observable<Array<Car>> {
    return this.httpClient
      .get<Array<Car>>(allCarsUrl)
  }
}
