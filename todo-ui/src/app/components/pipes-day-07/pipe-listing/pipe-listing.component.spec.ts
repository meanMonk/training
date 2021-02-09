import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeListingComponent } from './pipe-listing.component';

describe('PipeListingComponent', () => {
  let component: PipeListingComponent;
  let fixture: ComponentFixture<PipeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
