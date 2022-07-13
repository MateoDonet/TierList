import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from 'src/app/shared/services/media.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, OnChanges {
  medias: [] = [];
  mediaToAdd: any = null;
  isVisible: boolean;
  hasSearch: boolean;

  mediaTitreCtrl: FormControl;
  mediaSearchForm: FormGroup;

  constructor(
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  initForm() {
    this.mediaTitreCtrl = this.fb.control('', Validators.required);
    this.mediaSearchForm = this.fb.group({
      media_titre: this.mediaTitreCtrl
    });
  }

  initData() {
    this.mediaService.getMedias().subscribe(medias => {
      this.medias = medias;
    });
  }

  search(): void {
    this.mediaService.searchMedia(this.mediaTitreCtrl.value).subscribe(medias => {
      this.medias = medias;
      console.log(this.medias);
      
    });
  }

  refreshSearch() {
    this.hasSearch = false;
    this.initForm();
    this.initData(); 
  }

  setMediaToAdd(media): any {
    this.mediaToAdd = media;
    this.isVisible = true;
  }

  setVisible(param): any {
    this.isVisible = param;
  }
}
