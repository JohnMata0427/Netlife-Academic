import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { MessageResponse } from '@interfaces/message-response.interface';
import { User } from '@interfaces/user.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlAPI = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http
      .post<MessageResponse>(this.urlAPI + '/auth/register', user)
      .pipe(
        tap(({ token }) => {
          if (token) localStorage.setItem('token', token);
        })
      );
  }

  loginUser(
    loginData: Partial<{ email: string | null; password: string | null }>
  ) {
    return this.http
      .post<MessageResponse>(this.urlAPI + '/auth/login', loginData)
      .pipe(
        tap(({ token }) => {
          if (token) localStorage.setItem('token', token);
        })
      );
  }

  recoveryPassword(email: string) {
    return this.http.post<MessageResponse>(
      this.urlAPI + '/auth/recovery-password',
      { email }
    );
  }

  verifyCode(verificationCode: string, token: string) {
    return this.http.post<MessageResponse>(
      this.urlAPI + '/auth/verify-code',
      { verificationCode },
      { params: new HttpParams().set('token', token) }
    );
  }

  newPassword(
    changePassword: Partial<{
      password: string | null;
      confirmPassword: string | null;
    }>,
    token: string
  ) {
    return this.http.post<MessageResponse>(
      this.urlAPI + '/auth/new-password',
      changePassword,
      { params: new HttpParams().set('token', token) }
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    if (!token) return false;

    const payload = JSON.parse(atob(token.split('.')[1]));

    return (payload.exp * 1000) > Date.now();
  }

  getInfoUser() {
    const token = localStorage.getItem('token');

    if (!token) return null;

    return JSON.parse(atob(token.split('.')[1]));
  }
}
