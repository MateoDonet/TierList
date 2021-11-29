import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from '../shared/services/url.service';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {
  act_route: string = null;

  constructor(
    private urlService: UrlService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.urlService.url_parts.subscribe(url_part => {
      this.act_route = url_part[2] || 'add';
    });
  }

  isActive(route: string): boolean {
    return route == this.act_route;
  }

}
