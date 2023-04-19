import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barra1Component } from './barra1.component';

describe('Barra1Component', () => {
  let component: Barra1Component;
  let fixture: ComponentFixture<Barra1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barra1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barra1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
