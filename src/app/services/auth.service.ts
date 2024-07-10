import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@netlifeacademic/environments/environment.development';
import { MessageResponse } from '@netlifeacademic/interfaces/message-response.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private urlAPI = environment.API_URL;
  
  constructor(private http: HttpClient) {

  }

  registerUser(user: any) {
    return this.http.post(this.urlAPI + "/auth/register", user);
  }

  loginUser(user: any) {
    return this.http.post<MessageResponse>(this.urlAPI + "/auth/login", user)
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
}
