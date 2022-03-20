import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {

  medias_S_tier: any = null;
  medias_A_tier: any = null;
  medias_B_tier: any = null;
  medias_C_tier: any = null;
  medias_D_tier: any = null;
  medias_E_tier: any = null;
  medias_F_tier: any = null;
  
  filter: boolean;

  S_tier: boolean;
  A_tier: boolean;
  B_tier: boolean;
  C_tier: boolean;
  D_tier: boolean;
  E_tier: boolean;
  F_tier: boolean;

  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit(): void {
    this.S_tier = true;
    this.getMediasOfSTier();
  }

  getMediasOfSTier() {
    this.mediaService.getUserMediasOfTier("S").subscribe(data => {
      this.medias_S_tier = data;
    });
  }

  getMediasOfATier() {
    this.mediaService.getUserMediasOfTier("A").subscribe(data => {
      this.medias_A_tier = data;
    });
  }

  getMediasOfBTier() {
    this.mediaService.getUserMediasOfTier("B").subscribe(data => {
      this.medias_B_tier = data;
    });
  }

  getMediasOfCTier() {
    this.mediaService.getUserMediasOfTier("C").subscribe(data => {
      this.medias_C_tier = data;
    });
  }

  getMediasOfDTier() {
    this.mediaService.getUserMediasOfTier("D").subscribe(data => {
      this.medias_D_tier = data;
    });
  }

  getMediasOfETier() {
    this.mediaService.getUserMediasOfTier("E").subscribe(data => {
      this.medias_E_tier = data;
    });
  }

  getMediasOfFTier() {
    this.mediaService.getUserMediasOfTier("F").subscribe(data => {
      this.medias_F_tier = data;
    });
  }
}
