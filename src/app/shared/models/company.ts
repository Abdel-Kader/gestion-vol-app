
export interface ICompany {
  id?: number;
  companyName?: string
}

export class Company implements ICompany{

  constructor(public id?: number,
              public companyName?: string) {
  }

}
