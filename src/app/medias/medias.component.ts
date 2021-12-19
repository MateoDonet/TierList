import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {

  medias: any = null;
  filter: boolean = true;

  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit(): void {
    this.mediaService.getUserMedias().subscribe(data => {
      this.medias = data;
    });
  }

}
