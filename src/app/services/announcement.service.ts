import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { MessageResponse } from '@interfaces/message-response.interface';
import { User } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private urlAPI = environment.BACKEND_URL;

  constructor(private httpClient: HttpClient) {}

  getAllAnnouncements() {
    return this.httpClient.get(this.urlAPI + '/api/announcements');
  }

  createAnnouncement(obj: any) {
    return this.httpClient.post(this.urlAPI + '/api/announcements', obj);
  }

}
