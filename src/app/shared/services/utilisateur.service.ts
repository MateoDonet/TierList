import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  utilisateurAuthentification(u_username, u_password): any {
    return this.http.post(environment.tierListAPI + "utilisateur", JSON.stringify({
        u_username: u_username,
        u_password: u_password
    }));
  }
}
