import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {

  medias_S_tier_length: number;
  medias_A_tier_length: number;
  medias_B_tier_length: number;
  medias_C_tier_length: number;
  medias_D_tier_length: number;
  medias_E_tier_length: number;
  medias_F_tier_length: number;

  S_tier: boolean;
  A_tier: boolean;
  B_tier: boolean;
  C_tier: boolean;
  D_tier: boolean;
  E_tier: boolean;
  F_tier: boolean;

  medias_S_tier: any[] = [];
  medias_A_tier: any[] = [];
  medias_B_tier: any[] = [];
  medias_C_tier: any[] = [];
  medias_D_tier: any[] = [];
  medias_E_tier: any[] = [];
  medias_F_tier: any[] = [];

  filter: boolean;

  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit(): void {
    this.mediaService.getNbMediasForUserWithTier().subscribe(datas => {
      this.getNbMediaOfTiers(datas);
    });

    this.S_tier = true;
    this.getMediasOfSTier();
  }

  getNbMediaOfTiers(datas: any[]) {
    for(let data of datas) {
      switch(data.tier_label) {
        case 'S':
          this.medias_S_tier_length = data.nb_media;
          break;
        case 'A':
          this.medias_A_tier_length = data.nb_media;
          break;
        case 'B':
          this.medias_B_tier_length = data.nb_media;
          break;
        case 'C':
          this.medias_C_tier_length = data.nb_media;
          break;
        case 'D':
          this.medias_D_tier_length = data.nb_media;
          break;
        case 'E':
          this.medias_E_tier_length = data.nb_media;
          break;
        case 'F':
          this.medias_F_tier_length = data.nb_media;
          break;
      }
    }
  }

  getMediasOfSTier() {
    if(this.S_tier){
      this.mediaService.getUserMediasOfTier("S").subscribe(data => {
        this.medias_S_tier = data;
      });
    }
  }

  getMediasOfATier() {
    if(this.A_tier){
      this.mediaService.getUserMediasOfTier("A").subscribe(data => {
        this.medias_A_tier = data;
      });
    }
  }

  getMediasOfBTier() {
    if(this.B_tier){
      this.mediaService.getUserMediasOfTier("B").subscribe(data => {
        this.medias_B_tier = data;
      });
    }
  }

  getMediasOfCTier() {
    if(this.C_tier){
      this.mediaService.getUserMediasOfTier("C").subscribe(data => {
        this.medias_C_tier = data;
      });
    }
  }

  getMediasOfDTier() {
    if(this.D_tier){
      this.mediaService.getUserMediasOfTier("D").subscribe(data => {
        this.medias_D_tier = data;
      });
    }
  }

  getMediasOfETier() {
    if(this.E_tier){
      this.mediaService.getUserMediasOfTier("E").subscribe(data => {
        this.medias_E_tier = data;
      });
    }
  }

  getMediasOfFTier() {
    if(this.F_tier){
      this.mediaService.getUserMediasOfTier("F").subscribe(data => {
        this.medias_F_tier = data;
      });
    }
  }
}
