import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesFormsComponent } from './sales-forms.component';

describe('SalesFormsComponent', () => {
  let component: SalesFormsComponent;
  let fixture: ComponentFixture<SalesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
