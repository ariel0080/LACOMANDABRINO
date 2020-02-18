import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasMesasComponent } from './estadisticas-mesas.component';

describe('EstadisticasMesasComponent', () => {
  let component: EstadisticasMesasComponent;
  let fixture: ComponentFixture<EstadisticasMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
