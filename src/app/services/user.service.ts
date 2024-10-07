import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { MessageResponse } from '@interfaces/message-response.interface';
import { User } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private urlAPI = environment.BACKEND_URL;

  constructor(private httpClient: HttpClient) {}

  getUserById(id: string) {
    return this.httpClient.get<User>(this.urlAPI + '/api/users/' + id);
  }

  getAllUsers() {
    return this.httpClient.get<User[]>(this.urlAPI + '/api/users');
  }

  getRankedUsers() {
    return this.httpClient.get<User[]>(this.urlAPI + '/api/users/ranking');
  }

  updateUser(user: any, id: string) {
    return this.httpClient.put<User>(this.urlAPI + '/api/users/' + id, user);
  }

  updatePhoto = (image: File, id: string) => {
    const formData = new FormData();
    formData.append('image', image);
    return this.httpClient.post<MessageResponse>(
      this.urlAPI + '/api/users/' + id + '/upload-image',
      formData,
      {
        reportProgress: true,
        observe: 'events',
      },
    );
  };

  createUser(email: string, role: string) {
    return this.httpClient.post<User>(this.urlAPI + '/api/users', {
      email,
      role,
    });
  }

  blockUser(email: string) {
    return this.httpClient.put<MessageResponse>(
      this.urlAPI + '/api/users/lock-user',
      { email },
    );
  }
}
