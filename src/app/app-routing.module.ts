import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightComparaisonComponent} from "./public/components/flight/flight-comparaison/flight-comparaison.component";
import {NotFoundComponent} from "./core/components/not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
