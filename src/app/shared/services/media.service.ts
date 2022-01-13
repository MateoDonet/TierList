import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getMedias(): any {
    return this.http.get(environment.tierListAPI + 'medias');
  }

  getUserMedias(): any {
    return this.http.get(environment.tierListAPI + "mediasFromUtilisateurList/" + localStorage.u_id);
  }

  getMedia(id: number): any {
    return this.http.get(environment.tierListAPI + "media/id/" + id);
  }

  searchMedia(titre: string): any {
    return this.http.get(environment.tierListAPI + "medias/titre/" + titre);
  }

  createMediaAndAddInList(media_titre, media_description, media_img, media_tag_id, media_etat, media_categ_id, user_id, uml_tier_id, uml_avancement): any {
    return this.http.post(environment.tierListAPI + "mediaIntoMediaAndUtilisateurList/",
        {
          "media_titre" : media_titre, 
          "media_description" : media_description, 
          "media_img" : media_img, 
          'media_tag_id': media_tag_id,
          "media_etat" : media_etat, 
          "media_categ_id" : media_categ_id, 
          "user_id" : user_id, 
          "uml_tier_id" : uml_tier_id, 
          "uml_avancement" : uml_avancement
        }
    );
  }
}
