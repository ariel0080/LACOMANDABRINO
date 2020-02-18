import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasPedidosComponent } from './estadisticas-pedidos.component';

describe('EstadisticasPedidosComponent', () => {
  let component: EstadisticasPedidosComponent;
  let fixture: ComponentFixture<EstadisticasPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
