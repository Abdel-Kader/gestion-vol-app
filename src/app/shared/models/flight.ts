import { ICompany } from "./company";
import {ICity} from "./city";

export interface IFlight {
  id?: number
  flightID?: string
  takeOffDate?: Date
  landingDate?: Date
  company?: ICompany
  takeOffCity?: ICity
  landingCity?: ICity
  className?: string
  classPrice?: number
}

export class Flight implements IFlight {

  constructor(public id?: number,
              public flightID?: string,
              public takeOffDate?: Date,
              public landingDate?: Date,
              public company?: ICompany,
              public takeOffCity?: ICity,
              public landingCity?: ICity,
              public className?: string,
              public classPrice?: number) {
  }


}
