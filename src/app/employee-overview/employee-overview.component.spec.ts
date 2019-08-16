import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOVerviewComponent } from './employee-overview.component';

describe('EmployeeOVerviewComponent', () => {
  let component: EmployeeOVerviewComponent;
  let fixture: ComponentFixture<EmployeeOVerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOVerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOVerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
