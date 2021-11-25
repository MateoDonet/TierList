import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/services/media.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {

  medias: any = null;

  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit(): void {
    this.mediaService.getMedias().subscribe(data => {
      this.medias = data;
    });
  }

}
