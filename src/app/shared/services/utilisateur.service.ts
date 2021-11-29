import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  utilisateurAuthentification(username, password): any {
    // console.log(JSON.stringify({
    //   u_username: username, u_password: password 
    // }));
    
    return this.http.post(environment.tierListAPI + "utilisateur", 
    //JSON.stringify(
      {
        "u_username": username, "u_password": password 
      }
    //)
    );
  }
}
