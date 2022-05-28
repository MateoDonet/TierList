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
    const tier = +route.paramMap.get('tier');
    if(!id || !tier) return of(null);
    return this.mediaService.getMediaOfUserByIdAndTier(id, tier);
  }
}
