import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@netlifeacademic/environments/environment.development';
import { MessageResponse } from '@netlifeacademic/interfaces/message-response.interface';
import { User } from '@netlifeacademic/interfaces/user.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private urlAPI = environment.API_URL;
  private token = '';

  constructor(private http: HttpClient, private router: Router) {
    
  }

  registerUser(user: User) {
    return this.http.post(this.urlAPI + "/auth/register", user);
  }

  loginUser(user: User) {
    return this.http.post<MessageResponse>(this.urlAPI + "/auth/login", user).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem(this.token, response.token);
        }
      }
    ))
  }

  recoveryPassword(email: string | null) {
    return this.http.post<MessageResponse>(this.urlAPI + "/auth/recovery-password", { email })
  }

  verifyCode(verificationCode: string | null, token: any) {
    const tokenParam = new HttpParams().set('token', token);
    return this.http.post<MessageResponse>(this.urlAPI + "/auth/verify-code", { verificationCode }, { params: tokenParam })
  }

  newPassword(changePassword: any, token: any) {
    const tokenParam = new HttpParams().set('token', token);
    return this.http.post<MessageResponse>(this.urlAPI + "/auth/new-password", changePassword, { params: tokenParam })
  }

  private getToken() {
    return localStorage.getItem(this.token);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));

    const exp = payload.exp * 1000;

    return (exp > Date.now());
  }

  logout() {
    localStorage.removeItem(this.token);
    this.router.navigate(['/auth/login']);
  }

  getInfoFromToken() {
    const token = localStorage.getItem(this.token);
    if (!token) {
      return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));

    return payload.sub
  }
}
