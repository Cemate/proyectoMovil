import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosEconomicosComponent } from './ingresos-economicos.component';

describe('IngresosEconomicosComponent', () => {
  let component: IngresosEconomicosComponent;
  let fixture: ComponentFixture<IngresosEconomicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosEconomicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosEconomicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
