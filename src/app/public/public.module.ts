import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { FlightDetailComponent } from './components/flight/flight-detail/flight-detail.component';
import { FlightComparaisonComponent } from './components/flight/flight-comparaison/flight-comparaison.component';
import {SharedModule} from "../shared/shared.module";
import { PublicComponent } from './public.component';
import {FormsModule} from "@angular/forms";
import { FlightListComponent } from './components/flight/flight-list/flight-list.component';
import { AddFlightComponent } from './components/flight/add-flight/add-flight.component';


@NgModule({
  declarations: [
    FlightDetailComponent,
    FlightComparaisonComponent,
    PublicComponent,
    FlightListComponent,
    AddFlightComponent
  ],
    imports: [
        SharedModule,
        PublicRoutingModule,
        FormsModule
    ]
})
export class PublicModule { }
