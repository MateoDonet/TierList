import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

import { MediaService } from '../media.service';

@Injectable({
  providedIn: 'root'
})
export class MediaResolverService implements Resolve<any> {

  constructor(private mediaService: MediaService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const id = +route.paramMap.get('id');
    if(!id) return of(null);
    return this.mediaService.getMedia(id);
  }
}
