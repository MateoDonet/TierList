import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getMedias(): any {
    return this.http.get(environment.tierListAPI + "mediasFromUtilisateurList/" + localStorage.u_id);
  }

  searchMedia(titre: string): any {
    return this.http.get(environment.tierListAPI + "medias/" + titre);
  }
}
