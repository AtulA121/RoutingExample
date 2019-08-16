import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private _http : HttpClient) { }

  getEmployeeData()
  {
    return this._http.get<any>("http://localhost:8080/getData");
  }

  getEmployeeDataByName(name)
  {
    return this._http.post<any>("http://localhost:8080/getDataByName",name);
  }
}
