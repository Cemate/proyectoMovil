import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitatorioEscuelasComponent } from './citatorio-escuelas.component';

describe('CitatorioEscuelasComponent', () => {
  let component: CitatorioEscuelasComponent;
  let fixture: ComponentFixture<CitatorioEscuelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitatorioEscuelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitatorioEscuelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
