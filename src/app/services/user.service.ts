import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@netlifeacademic/environments/environment';
import { MessageResponse } from '@netlifeacademic/interfaces/message-response.interface';
import { User } from '@netlifeacademic/interfaces/user.interface';

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

  updateUser(user: User, id: string) {
    return this.httpClient.put<User>(this.urlAPI + '/api/users/' + id, user);
  }

  updatePhoto(image: File | null, id: string) {
    const formData = new FormData();
    if (image) formData.append('image', image);
    return this.httpClient.post<MessageResponse>(
      this.urlAPI + '/api/users/' + id + '/upload-image',
      formData
    );
  }
}
