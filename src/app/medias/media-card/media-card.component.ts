import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {
  @Input() media: any;

  constructor() { }

  ngOnInit(): void {
  }

}
