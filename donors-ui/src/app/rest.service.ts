import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endPoint = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({
    'ContentType': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {


  constructor(private http: HttpClient) { 

  }

  private extractData(response: Response){
    let body = response;
    return body || { };
  }

  getDonors(): Observable<any>{
    return this.http.get(endPoint+'donors')
    .pipe(map(this.extractData));
  }
}
