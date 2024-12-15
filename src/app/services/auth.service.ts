import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { MessageResponse } from '@interfaces/message-response.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private urlAPI = environment.BACKEND_URL;
  private httpClient = inject(HttpClient);

  public registerUser(user: any) {
    return this.httpClient
      .post<MessageResponse>(this.urlAPI + '/auth/register', user)
      .pipe(
        tap(({ token }) => {
          if (token) localStorage.setItem('token', token);
        }),
      );
  }

  public loginUser(
    loginData: Partial<{ email: string | null; password: string | null }>,
  ) {
    return this.httpClient
      .post<MessageResponse>(this.urlAPI + '/auth/login', loginData)
      .pipe(
        tap(({ token }) => {
          if (token) localStorage.setItem('token', token);
        }),
      );
  }

  public recoveryPassword(email: string) {
    return this.httpClient.post<MessageResponse>(
      this.urlAPI + '/auth/recovery-password',
      { email },
    );
  }

  public verifyCode(verificationCode: string, token: string) {
    return this.httpClient.post<MessageResponse>(
      this.urlAPI + '/auth/verify-code',
      { verificationCode },
      { params: new HttpParams().set('token', token) },
    );
  }

  public newPassword(
    changePassword: Partial<{
      password: string | null;
      confirmPassword: string | null;
    }>,
    token: string,
  ) {
    return this.httpClient.post<MessageResponse>(
      this.urlAPI + '/auth/new-password',
      changePassword,
      { params: new HttpParams().set('token', token) },
    );
  }

  public isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) return false;

    return Date.now() < JSON.parse(atob(token.split('.')[1])).exp * 1000;
  }

  public getInfoUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    return JSON.parse(atob(token.split('.')[1]));
  }
}
