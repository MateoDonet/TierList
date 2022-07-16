import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Categorie } from '../shared/model/categorie.model';
import { Media } from '../shared/model/media.model';
import { Tag } from '../shared/model/tag.model';
import { CategorieService } from '../shared/services/categorie.service';
import { MediaService } from '../shared/services/media.service';
import { TagService } from '../shared/services/tag.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {

  loading: boolean;

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
  tags: Tag[] = [];

  categIdCtrl: FormControl;
  tagIdCtrl: FormControl;
  mediaTitreCtrl: FormControl;

  filterForm: FormGroup;

  filter: boolean;

  constructor(
    private mediaService: MediaService,
    private categorieService: CategorieService,
    private tagService: TagService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.mediaService.getNbMediasForUserWithTier().subscribe(datas => {
      this.getNbMediaOfTiers(datas);

      this.loading = false;
    });

    this.S_tier = true;
    this.getMediasOfSTier();

    this.categorieService.getCategories().subscribe(datas => {
      this.categories = datas;
    });

    this.tagService.getTags().subscribe(datas => {
      this.tags = datas;
    });
  }

  initForm() {
    this.categIdCtrl = this.fb.control("");
    this.tagIdCtrl = this.fb.control("");
    this.mediaTitreCtrl = this.fb.control("");
    this.filterForm = this.fb.group({
      categ_id: this.categIdCtrl,
      tag_id: this.tagIdCtrl,
      media_titre: this.mediaTitreCtrl
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
      this.loading = true;
      this.mediaService.getUserMediasOfTier("S").subscribe(data => {
        this.medias_S_tier = data;
        this.loading = false;
      });
    }
  }

  getMediasOfATier() {
    if(this.A_tier){
      this.loading = true;
      this.mediaService.getUserMediasOfTier("A").subscribe(data => {
        this.medias_A_tier = data;
        this.loading = false;
      });
    }
  }

  getMediasOfBTier() {
    if(this.B_tier){
      this.loading =true;
      this.mediaService.getUserMediasOfTier("B").subscribe(data => {
        this.medias_B_tier = data;
        this.loading = false;
      });
    }
  }

  getMediasOfCTier() {
    if(this.C_tier){
      this.loading = true;
      this.mediaService.getUserMediasOfTier("C").subscribe(data => {
        this.medias_C_tier = data;
        this.loading = false;
      });
    }
  }

  getMediasOfDTier() {
    if(this.D_tier){
      this.loading = true;
      this.mediaService.getUserMediasOfTier("D").subscribe(data => {
        this.medias_D_tier = data;
        this.loading = false;
      });
    }
  }

  getMediasOfETier() {
    if(this.E_tier){
      this.loading = true;
      this.mediaService.getUserMediasOfTier("E").subscribe(data => {
        this.medias_E_tier = data;
        this.loading = false;
      });
    }
  }

  getMediasOfFTier() {
    if(this.F_tier){
      this.loading = true;
      this.mediaService.getUserMediasOfTier("F").subscribe(data => {
        this.medias_F_tier = data;
        this.loading = false;
      });
    }
  }
}
