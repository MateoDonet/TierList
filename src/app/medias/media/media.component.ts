import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { MediaService } from 'src/app/shared/services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  media: any = null;
  deleteRequest: boolean;

  constructor(
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.pipe(pluck('mediaFrmRslv')).subscribe(data => {
      this.media = data;
      
      this.getTierClasse(data.tier_label);
    });
  }

  delete(): any {
    this.mediaService.deleteMediaOfUser(this.media.media_id, this.media.uml_tier_id).subscribe(_ => {
      this.router.navigate(['/mes-medias'], { relativeTo: this.route });
    });
  }

  getTierClasse(tier_label: string): any {
    switch(tier_label) {
      case 'S':
        this.setTierClass("S_tier");
        break;
      case 'A':
        this.setTierClass("A_tier");
        break;
      case 'B':
        this.setTierClass("B_tier");
        break;
      case 'C':
        this.setTierClass("C_tier");
        break;
      case 'D':
        this.setTierClass("D_tier");
        break;
      case 'E':
        this.setTierClass("E_tier");
        break;
      case 'F':
        this.setTierClass("F_tier");
        break;
    }
  }

  setTierClass(tier: string) {
    document.getElementById("media_tier").className = '';
    document.getElementById("media_tier").classList.add(tier);
  }
}
