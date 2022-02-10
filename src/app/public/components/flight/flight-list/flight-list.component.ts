import { Component, OnInit } from '@angular/core';
import {Flight} from "../../../../shared/models/flight";
import {FlightService} from "../../../../core/services/flight/flight.service";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights?: Flight[]

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
      this.flightService.listFlight().subscribe(res=> {
        this.flights = res;
      }, error => console.log(error))
  }

}
