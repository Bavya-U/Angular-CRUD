import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly url = "https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/User/";

  constructor(private http: HttpClient) { }

  AddUser(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }

  GetAllUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  DeleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.url}${id}`);
  }

  GetUserById(id: any): Observable<any> {
    return this.http.get(`${this.url}${id}`);
  }

  UpdateUser(id: any, user: any): Observable<any> {
    return this.http.put(`${this.url}${id}`, user);
  }
}
