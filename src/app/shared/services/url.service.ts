import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
    private source = new BehaviorSubject([]);
    url_parts = this.source.asObservable();

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { 
        router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
            this.getUrlPart(e.url)
        });
    }

    private getUrlPart(url): any {
        this.source.next(url.split("/"));
    }
}
