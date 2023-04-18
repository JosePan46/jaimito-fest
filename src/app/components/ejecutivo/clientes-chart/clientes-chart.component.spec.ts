import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesChartComponent } from './clientes-chart.component';

describe('ClientesChartComponent', () => {
  let component: ClientesChartComponent;
  let fixture: ComponentFixture<ClientesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
