import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightComparaisonComponent } from './flight-comparaison.component';

describe('FlightComparaisonComponent', () => {
  let component: FlightComparaisonComponent;
  let fixture: ComponentFixture<FlightComparaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightComparaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightComparaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
