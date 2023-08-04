import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosAllComponent } from './egresos-all.component';

describe('EgresosAllComponent', () => {
  let component: EgresosAllComponent;
  let fixture: ComponentFixture<EgresosAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgresosAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgresosAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
