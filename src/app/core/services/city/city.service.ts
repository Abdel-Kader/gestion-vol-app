import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight} from "../../../shared/models/flight";
import {City} from "../../../shared/models/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  baseURL = `${environment.baseURL}city/`;

  constructor(private http: HttpClient) {
  }

  getCities() : Observable<City[]>{
    return this.http.get<City[]>(this.baseURL + 'list');
  }

}
