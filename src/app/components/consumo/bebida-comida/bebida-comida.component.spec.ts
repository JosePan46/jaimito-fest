import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaComidaComponent } from './bebida-comida.component';

describe('BebidaComidaComponent', () => {
  let component: BebidaComidaComponent;
  let fixture: ComponentFixture<BebidaComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaComidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidaComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
