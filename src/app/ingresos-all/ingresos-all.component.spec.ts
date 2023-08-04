import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosAllComponent } from './ingresos-all.component';

describe('IngresosAllComponent', () => {
  let component: IngresosAllComponent;
  let fixture: ComponentFixture<IngresosAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresosAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
