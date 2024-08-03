import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@netlifeacademic/environments/environment';
import { MessageResponse } from '@netlifeacademic/interfaces/message-response.interface';
import { User } from '@netlifeacademic/interfaces/user.interface';

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
