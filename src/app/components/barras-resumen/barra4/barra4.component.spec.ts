import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barra4Component } from './barra4.component';

describe('Barra4Component', () => {
  let component: Barra4Component;
  let fixture: ComponentFixture<Barra4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barra4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barra4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
