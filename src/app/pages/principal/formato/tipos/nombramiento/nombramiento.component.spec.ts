import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombramientoComponent } from './nombramiento.component';

describe('NombramientoComponent', () => {
  let component: NombramientoComponent;
  let fixture: ComponentFixture<NombramientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombramientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
