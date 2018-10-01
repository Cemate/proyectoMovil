import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberacionServicioComponent } from './liberacion-servicio.component';

describe('LiberacionServicioComponent', () => {
  let component: LiberacionServicioComponent;
  let fixture: ComponentFixture<LiberacionServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberacionServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberacionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
