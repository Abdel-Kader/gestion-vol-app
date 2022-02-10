import {Component, Input, OnInit} from '@angular/core';
import {FlightService} from "../../../../core/services/flight/flight.service";
import {Flight} from "../../../../shared/models/flight";

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  @Input() flightID: string = '';
  flight?: Flight;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.flightService.flightDetail(this.flightID).subscribe(res => {
      this.flight = res;
    }, error => console.log(error))
  }
}
