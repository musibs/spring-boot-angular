import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDonorComponent } from './delete-donor.component';

describe('DeleteDonorComponent', () => {
  let component: DeleteDonorComponent;
  let fixture: ComponentFixture<DeleteDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
