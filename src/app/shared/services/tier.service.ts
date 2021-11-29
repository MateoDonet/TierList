import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TierService {

  constructor(private http: HttpClient) { }

  getTiers(): any {
    return this.http.get(environment.tierListAPI + "tiers");
  }
}
