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

  read(id: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/learners/${id}`, requestOptions);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(`${baseURL}/learners`, data, requestOptions);
  }

  update(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/learners/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/learners/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${baseURL}/learners`);
  }

  searchByName(name: string): Observable<any> {
    return this.httpClient.get(`${baseURL}/learners-search/${name}`, requestOptions);
  }
}
