import { NgModule } from '@angular/core';
import {PublicComponent} from "./public.component";
import { RouterModule, Routes } from '@angular/router';
import {FlightComparaisonComponent} from "./components/flight/flight-comparaison/flight-comparaison.component";
import {FlightDetailComponent} from "./components/flight/flight-detail/flight-detail.component";
import {FlightListComponent} from "./components/flight/flight-list/flight-list.component";
import {AddFlightComponent} from "./components/flight/add-flight/add-flight.component";

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: FlightListComponent
      },
      {
        path: 'create',
        component: AddFlightComponent
      },
      {
        path: 'recherche',
        component: FlightComparaisonComponent
      },
      {
        path: 'detail-vol',
        component: FlightDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
