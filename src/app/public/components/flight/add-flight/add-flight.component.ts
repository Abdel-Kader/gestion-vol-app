import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../../../shared/models/city";
import {Flight} from "../../../../shared/models/flight";
import {Company} from "../../../../shared/models/company";
import {FlightService} from "../../../../core/services/flight/flight.service";
import {CityService} from "../../../../core/services/city/city.service";
import {CompanyService} from "../../../../core/services/company/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  // @Input() flightID: string = '';
  //
  // @Input() takeOffDate: string = '';
  //
  // @Input() landingDate: string = '';
  //
  // @Input() company: number = 0;
  //
  // @Input() takeOffCity: number = 0;
  //
  // @Input() landingCity: number = 0;
  //
  // @Input() className: string = '';
  //
  // @Input() classPrice: number = 0;

  cities?: City[];

  companies?: Company[]

  company?: Company

  takeOffCity?: City

  landingCity?: City

  flight?: Flight

  minTakeOffDate?: Date
  nimLandingDate?: Date

  constructor(private flightService: FlightService,
              private cityService: CityService,
              private companyService: CompanyService,
              private router: Router) { }

  ngOnInit(): void {
    this.minTakeOffDate = new Date();
    this.cityService.getCities().subscribe(data=> {
      this.cities = data
    }, error => {console.log(error)})

    this.companyService.getCompanies().subscribe(data=> {
      this.companies = data
    }, error => {console.log(error)})
  }

  onAdd(flightForm: any) {
     this.company = new Company(flightForm.form.value.company);
     this.takeOffCity = new City(flightForm.form.value.takeOffCity)
     this.landingCity = new City(flightForm.form.value.landingCity)
     this.flight= new Flight(0, flightForm.form.value.flightID,
      flightForm.form.value.takeOffDate, flightForm.form.value.landingDate,
       this.company, this.takeOffCity, this.landingCity,
       flightForm.form.value.className, flightForm.form.value.classPrice)
    this.flightService.addFlight(this.flight).subscribe(res=> {
      alert("Vol ajouté avec succès !")
      this.router.navigate(['/'])
    }, error => alert("Une erreur s'est produite ! veuillez ressayer"))
    console.log(flightForm)
  }
}
