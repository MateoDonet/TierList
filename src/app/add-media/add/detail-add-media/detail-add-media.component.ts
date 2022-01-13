import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-detail-add-media',
  templateUrl: './detail-add-media.component.html',
  styleUrls: ['./detail-add-media.component.scss']
})
export class DetailAddMediaComponent implements OnInit {

  media: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.pipe(pluck('mediaFrmResolve')).subscribe(data => {
      // console.log(data);

      this.media = data;
    });
  }

}
