import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barra3Component } from './barra3.component';

describe('Barra3Component', () => {
  let component: Barra3Component;
  let fixture: ComponentFixture<Barra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barra3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
