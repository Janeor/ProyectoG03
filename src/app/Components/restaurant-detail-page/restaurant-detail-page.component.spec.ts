import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailPageComponent } from './restaurant-detail-page.component';

describe('RestaurantDetailPageComponent', () => {
  let component: RestaurantDetailPageComponent;
  let fixture: ComponentFixture<RestaurantDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantDetailPageComponent]
    });
    fixture = TestBed.createComponent(RestaurantDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
