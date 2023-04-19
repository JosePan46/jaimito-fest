import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasResumenComponent } from './barras-resumen.component';

describe('BarrasResumenComponent', () => {
  let component: BarrasResumenComponent;
  let fixture: ComponentFixture<BarrasResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasResumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
