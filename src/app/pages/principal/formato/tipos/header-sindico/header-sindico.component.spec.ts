import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSindicoComponent } from './header-sindico.component';

describe('HeaderSindicoComponent', () => {
  let component: HeaderSindicoComponent;
  let fixture: ComponentFixture<HeaderSindicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSindicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSindicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
