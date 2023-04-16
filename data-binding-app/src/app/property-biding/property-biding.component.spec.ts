import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBidingComponent } from './property-biding.component';

describe('PropertyBidingComponent', () => {
  let component: PropertyBidingComponent;
  let fixture: ComponentFixture<PropertyBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBidingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
