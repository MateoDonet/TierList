import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPhoneComponent } from './menu-phone.component';

describe('MenuPhoneComponent', () => {
  let component: MenuPhoneComponent;
  let fixture: ComponentFixture<MenuPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
