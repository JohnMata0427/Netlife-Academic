import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlAPI = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  getAllUsers () {
    return this.http.get(this.urlAPI + "/api/v1/users");
  }

  registerUser(user: any) {
    return this.http.post(this.urlAPI + "/auth/register", user);
  }
}
