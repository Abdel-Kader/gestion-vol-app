import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../../../shared/models/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseURL = `${environment.baseURL}company/`;

  constructor(private http: HttpClient) {
  }

  getCompanies() : Observable<Company[]>{
    return this.http.get<Company[]>(this.baseURL + 'list');
  }
}
