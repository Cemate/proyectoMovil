import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFormatosComponent } from './footer-formatos.component';

describe('FooterFormatosComponent', () => {
  let component: FooterFormatosComponent;
  let fixture: ComponentFixture<FooterFormatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFormatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
