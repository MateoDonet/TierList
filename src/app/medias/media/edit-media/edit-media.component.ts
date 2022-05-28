import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { MediaService } from 'src/app/shared/services/media.service';
import { TierService } from 'src/app/shared/services/tier.service';

@Component({
  selector: 'app-edit-media',
  templateUrl: './edit-media.component.html',
  styleUrls: ['./edit-media.component.scss']
})
export class EditMediaComponent implements OnInit {
  tiers: [];
  media_id: number;

  umlTierIdCtrl: FormControl;
  umlAvancementCtrl: FormControl;

  mediaEditForm: FormGroup;

  constructor(
    private tierService: TierService,
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.tierService.getTiers().subscribe(tiersFrmSrvc => {
      this.tiers = tiersFrmSrvc;      
    });

    this.route.parent.data.pipe(pluck('mediaFrmRslv')).subscribe(data => {
      this.initForm(data);

      this.media_id = data.media_id;
    });
  }

  initForm(data = null) {
    this.umlTierIdCtrl = this.fb.control(data ? data.uml_tier_id : 1, Validators.required);
    this.umlAvancementCtrl = this.fb.control(data ? data.uml_avancement : '', Validators.required);
    this.mediaEditForm = this.fb.group({
      uml_tier_id: this.umlTierIdCtrl,
      uml_avancement: this.umlAvancementCtrl
    });
  }

  edit() {
    this.mediaService.updateMediaInUserList(
      this.media_id,
      this.umlTierIdCtrl.value,
      this.umlAvancementCtrl.value
    ).subscribe(_ => {
      this.router.navigate(['../../../', this.media_id, this.umlTierIdCtrl.value], { relativeTo: this.route });
    })
  }

}
