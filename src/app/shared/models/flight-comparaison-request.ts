
export interface IFlightComparaisonRequest {
  takeOffAirport?: number;
  landingAirport?: number;
  date?: string;
}

export class FlightComparaisonRequest implements IFlightComparaisonRequest{

  constructor(
    public takeOffCity?: number,
    public landingCity?: number,
    public date?: string,
  ) {
  }

}
