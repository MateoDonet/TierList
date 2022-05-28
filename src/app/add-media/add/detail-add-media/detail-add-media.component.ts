import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from 'src/app/shared/services/media.service';
import { TierService } from 'src/app/shared/services/tier.service';

@Component({
  selector: 'app-detail-add-media',
  templateUrl: './detail-add-media.component.html',
  styleUrls: ['./detail-add-media.component.scss']
})
export class DetailAddMediaComponent implements OnInit {

  @Input() media: any;
  @Output() closePopupEvent = new EventEmitter<boolean>();
  tiers: any = [];

  umlTierIdCtrl: FormControl;
  umlAvancementCtrl: FormControl;

  addMediaInUserListForm: FormGroup;

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

    this.initForm();
  }

  closePopup(value: boolean) {
    this.closePopupEvent.emit(value);
  }

  initForm() {
    this.umlTierIdCtrl = this.fb.control(1, Validators.required);
    this.umlAvancementCtrl = this.fb.control('', Validators.required);
    this.addMediaInUserListForm = this.fb.group({
      uml_tier_id: this.umlTierIdCtrl,
      uml_avancement: this.umlAvancementCtrl
    });    
  }

  register(): any {
    this.mediaService.addMediaInUserList(
      this.media.media_id,
      this.umlTierIdCtrl.value,
      this.umlAvancementCtrl.value
    ).subscribe(_ => {
      // il serait possible de rediriger avec l'id de liaison retourner ou l'id du media
      this.router.navigate(['../'], { relativeTo: this.route });
      this.closePopup(false);
    })
  }

}
