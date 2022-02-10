import {Country, ICountry} from "./country";

export interface ICity {
  id?: number;

  cityName?: string;

  country?: ICountry
}

export class City implements ICity {

  constructor(public id?: number,
              public cityName?: string,
              public country?: ICountry
              ) {
  }


}
