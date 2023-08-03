import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionsComponent } from './transaccions.component';

describe('TransaccionsComponent', () => {
  let component: TransaccionsComponent;
  let fixture: ComponentFixture<TransaccionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransaccionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
