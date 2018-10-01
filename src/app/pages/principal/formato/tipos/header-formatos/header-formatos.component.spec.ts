import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFormatosComponent } from './header-formatos.component';

describe('HeaderFormatosComponent', () => {
  let component: HeaderFormatosComponent;
  let fixture: ComponentFixture<HeaderFormatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFormatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
