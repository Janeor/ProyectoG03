import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListPageComponent } from './restaurant-list-page.component';

describe('RestaurantListPageComponent', () => {
  let component: RestaurantListPageComponent;
  let fixture: ComponentFixture<RestaurantListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantListPageComponent]
    });
    fixture = TestBed.createComponent(RestaurantListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
