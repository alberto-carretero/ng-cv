import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExperienceInfoComponent } from './company-experience-info.component';

describe('CompanyExperienceInfoComponent', () => {
  let component: CompanyExperienceInfoComponent;
  let fixture: ComponentFixture<CompanyExperienceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExperienceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExperienceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
