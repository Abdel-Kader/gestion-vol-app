import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Flight} from "../../../shared/models/flight";
import {environment} from "../../../../environments/environment";
import {finalize, Observable} from "rxjs";
import {LoaderService} from "../loader.service";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  baseURL = `${environment.baseURL}flight/`;

  constructor(private http: HttpClient, private loaderService: LoaderService) {  }

  listFlight(): Observable<Flight[]> {
    this.loaderService.setLoading(true);
    return this.http
      .get<Flight[]>(this.baseURL + "list" )
      .pipe(
        finalize(() => this.loaderService.setLoading(false)));
  }

  compareFlight(takeOffCity: number | undefined, landingCity: number | undefined, date: string | undefined): Observable<Flight[]> {
    this.loaderService.setLoading(true);
    const url = `${this.baseURL}${takeOffCity}/${landingCity}/${date}`
    return this.http
      .get<Flight[]>(url)
      .pipe(
        finalize(() => this.loaderService.setLoading(false)));
  }

  flightDetail(flightID: string): Observable<Flight> {
    this.loaderService.setLoading(true);
    const url = `${this.baseURL}${flightID}`
    return this.http
      .get<Flight>(url)
      .pipe(
        finalize(() => this.loaderService.setLoading(false)));

  }

  addFlight(flight: Flight): Observable<Flight> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.loaderService.setLoading(true);
    return this.http
      .post<Flight>(this.baseURL + 'create', JSON.stringify(flight), httpOptions)
      .pipe(
        finalize(() => this.loaderService.setLoading(false))
      );
  }


}
