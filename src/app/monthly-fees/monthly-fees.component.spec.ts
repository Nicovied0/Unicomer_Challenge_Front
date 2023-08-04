import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyFeesComponent } from './monthly-fees.component';

describe('MonthlyFeesComponent', () => {
  let component: MonthlyFeesComponent;
  let fixture: ComponentFixture<MonthlyFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
