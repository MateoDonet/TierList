import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Media } from 'src/app/shared/model/media.model';
import { MediaService } from 'src/app/shared/services/media.service';
import { TierService } from 'src/app/shared/services/tier.service';

@Component({
  selector: 'app-edit-media',
  templateUrl: './edit-media.component.html',
  styleUrls: ['./edit-media.component.scss']
})
export class EditMediaComponent implements OnInit {
  @Input() media: Media;
  @Output() cancelEditEvent = new EventEmitter<boolean>();

  tiers: [];

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

    this.initForm(this.media);
  }

  initForm(data = null) {
    this.umlTierIdCtrl = this.fb.control(data ? data.uml_tier_id : 1, Validators.required);
    this.umlAvancementCtrl = this.fb.control(data ? data.uml_avancement : '', Validators.required);
    this.mediaEditForm = this.fb.group({
      uml_tier_id: this.umlTierIdCtrl,
      uml_avancement: this.umlAvancementCtrl
    });
  }

  closeEdit(value: boolean) {
    this.cancelEditEvent.emit(value);
  }

  edit() {
    this.mediaService.updateMediaInUserList(
      this.media.media_id,
      this.umlTierIdCtrl.value,
      this.umlAvancementCtrl.value
    ).subscribe(_ => {
      this.router.navigate(['../../', this.media.media_id, this.umlTierIdCtrl.value], { relativeTo: this.route });
      this.closeEdit(false);
    })
  }

}
