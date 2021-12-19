import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/shared/services/categorie.service';
import { MediaService } from 'src/app/shared/services/media.service';
import { TagService } from 'src/app/shared/services/tag.service';
import { TierService } from 'src/app/shared/services/tier.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  categories: [];
  tiers: [];
  tags: [];

  mediaTitreCtrl: FormControl;
  mediaDescriptionCtrl: FormControl;
  mediaImgCtrl: FormControl;
  mediaTagIdCtrl: FormControl;
  mediaCategIdCtrl: FormControl;
  mediaEtatCtrl: FormControl;
  umlTierIdCtrl: FormControl;
  umlAvancementCtrl: FormControl;

  mediaCreateForm: FormGroup;

  constructor(
    private categorieService: CategorieService,
    private tierService: TierService,
    private tagService: TagService,
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(categoriesFrmSrvc => {
      this.categories = categoriesFrmSrvc;
    });

    this.tierService.getTiers().subscribe(tiersFrmSrvc => {
      this.tiers = tiersFrmSrvc;      
    });

    this.tagService.getTags().subscribe(tagsFrmSrvc => {
      this.tags = tagsFrmSrvc;
    });

    this.initForm();
  }

  initForm() {
    this.mediaTitreCtrl = this.fb.control('', Validators.required);
    this.mediaDescriptionCtrl = this.fb.control('', Validators.required);
    // this.mediaImgCtrl = this.fb.control('', Validators.required);
    this.mediaTagIdCtrl = this.fb.control(1, Validators.required);
    this.mediaCategIdCtrl = this.fb.control(1, Validators.required);
    this.mediaEtatCtrl = this.fb.control(1, Validators.required);
    this.umlTierIdCtrl = this.fb.control(1, Validators.required);
    this.umlAvancementCtrl = this.fb.control('', Validators.required);
    this.mediaCreateForm = this.fb.group({
      media_titre: this.mediaTitreCtrl,
      media_description: this.mediaDescriptionCtrl,
      // media_img: this.mediaImgCtrl,
      media_tag_id: this.mediaTagIdCtrl,
      media_categ_id: this.mediaCategIdCtrl,
      media_etat: this.mediaEtatCtrl,
      uml_tier_id: this.umlTierIdCtrl,
      uml_avancement: this.umlAvancementCtrl
    });
  }

  register(): void {
    this.mediaService.createMediaAndAddInList(
      this.mediaTitreCtrl.value,
      this.mediaDescriptionCtrl.value,
      '',
      this.mediaTagIdCtrl.value,
      this.mediaEtatCtrl.value,
      this.mediaCategIdCtrl.value,
      localStorage.u_id,
      this.umlTierIdCtrl.value,
      this.umlAvancementCtrl.value
    ).subscribe(_ => {
      this.router.navigate(['/mes-medias'], { relativeTo: this.route });
    });
  }
}
