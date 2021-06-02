import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';

const baseURL = 'http://localhost:3000';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};

@Injectable({
  providedIn: 'root'
})
export class LearnerService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(`${baseURL}/learners`, requestOptions);
  }

  read(id: NumberValueAccessor): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`, requestOptions);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseURL, data, requestOptions);
  }

  update(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: SVGAnimatedNumberList): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${baseURL}`);
  }

  searchByName(name: string): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`, requestOptions);
  }
}
