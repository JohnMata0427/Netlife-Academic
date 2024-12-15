import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AnnouncementService {
  private urlAPI = environment.BACKEND_URL;
  private httpClient = inject(HttpClient);

  public getAllAnnouncements() {
    return this.httpClient.get(this.urlAPI + '/api/announcements');
  }

  public createAnnouncement(obj: any) {
    return this.httpClient.post(this.urlAPI + '/api/announcements', obj);
  }
}
