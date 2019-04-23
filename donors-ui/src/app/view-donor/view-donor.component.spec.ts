import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDonorComponent } from './view-donor.component';

describe('ViewDonorComponent', () => {
  let component: ViewDonorComponent;
  let fixture: ComponentFixture<ViewDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
