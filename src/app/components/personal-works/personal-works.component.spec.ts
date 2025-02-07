import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWorksComponent } from './personal-works.component';

describe('PersonalWorksComponent', () => {
  let component: PersonalWorksComponent;
  let fixture: ComponentFixture<PersonalWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
