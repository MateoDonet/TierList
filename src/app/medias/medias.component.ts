import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Categorie } from '../shared/model/categorie.model';
import { Media } from '../shared/model/media.model';
import { Tag } from '../shared/model/tag.model';
import { Tier } from '../shared/model/tier.model';
import { CategorieService } from '../shared/services/categorie.service';
import { MediaService } from '../shared/services/media.service';
import { TagService } from '../shared/services/tag.service';
import { TierService } from '../shared/services/tier.service';

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

  medias_S_tier: Media[] = [];
  medias_A_tier: Media[] = [];
  medias_B_tier: Media[] = [];
  medias_C_tier: Media[] = [];
  medias_D_tier: Media[] = [];
  medias_E_tier: Media[] = [];
  medias_F_tier: Media[] = [];

  categories: Categorie[] = [];
  tiers: Tier[] = [];
  tags: Tag[] = [];

  categIdCtrl: FormControl;
  tierIdCtrl: FormControl;
  tagIdCtrl: FormControl;

  filterForm: FormGroup;

  filter: boolean;

  constructor(
    private mediaService: MediaService,
    private categorieService: CategorieService,
    private tierService: TierService,
    private tagService: TagService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.mediaService.getNbMediasForUserWithTier().subscribe(datas => {
      this.getNbMediaOfTiers(datas);
    });

    this.S_tier = true;
    this.getMediasOfSTier();

    this.categorieService.getCategories().subscribe(datas => {
      this.categories = datas;
    });

    this.tierService.getTiers().subscribe(datas => {
      this.tiers = datas;
    });

    this.tagService.getTags().subscribe(datas => {
      this.tags = datas;
    });
  }

  initForm() {
    this.categIdCtrl = this.fb.control("");
    this.tierIdCtrl = this.fb.control("");
    this.tagIdCtrl = this.fb.control("");
    this.filterForm = this.fb.group({
      categ_id: this.categIdCtrl,
      tier_id: this.tierIdCtrl,
      tag_id: this.tagIdCtrl,
    });
  }

  filterMedia() {

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
