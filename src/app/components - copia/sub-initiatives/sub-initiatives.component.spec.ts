import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubInitiativesComponent } from './sub-initiatives.component';

describe('SubInitiativesComponent', () => {
  let component: SubInitiativesComponent;
  let fixture: ComponentFixture<SubInitiativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubInitiativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
