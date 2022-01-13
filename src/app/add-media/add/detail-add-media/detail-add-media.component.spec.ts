import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAddMediaComponent } from './detail-add-media.component';

describe('DetailAddMediaComponent', () => {
  let component: DetailAddMediaComponent;
  let fixture: ComponentFixture<DetailAddMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAddMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAddMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
