import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomReportComponent } from './custom-report.component';

describe('CustomReportComponent', () => {
  let component: CustomReportComponent;
  let fixture: ComponentFixture<CustomReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomReportComponent]
    });
    fixture = TestBed.createComponent(CustomReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
