import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';
const endpoint = 'https://hatchways.io/api/assessment/students';
export interface Product {
  city:string,
  company:string,
  email:string,
  firstName:string,
  grades:string[],
  id:string,
  lastName:string,
  pic:string,
  skill:string
}
@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }
  
  getProducts(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData)
    );
  }
}
