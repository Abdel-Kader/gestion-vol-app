import { Component, OnInit } from '@angular/core';
import {FlightComparaisonRequest} from "../../../../shared/models/flight-comparaison-request";
import {FlightService} from "../../../../core/services/flight/flight.service";
import {CityService} from "../../../../core/services/city/city.service";
import {City} from "../../../../shared/models/city";
import {Flight} from "../../../../shared/models/flight";

@Component({
  selector: 'app-flight-comparaison',
  templateUrl: './flight-comparaison.component.html',
  styleUrls: ['./flight-comparaison.component.css']
})
export class FlightComparaisonComponent implements OnInit {

  request : FlightComparaisonRequest = new FlightComparaisonRequest();

  cities?: City[];

  flights?: Flight[]

  constructor(private flightService: FlightService, private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe(data=> {
      this.cities = data
    }, error => {console.log(error)})
  }

  onSearch() {
    this.flightService.compareFlight(this.request.takeOffCity,
      this.request.landingCity,
      this.request.date).subscribe(res=> {
        this.flights = res;
        console.log(res)
    }, error => {
        console.log(error)
    })
  }
}
