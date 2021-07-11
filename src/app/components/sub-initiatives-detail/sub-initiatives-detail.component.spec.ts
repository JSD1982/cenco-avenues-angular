import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubInitiativesDetailComponent } from './sub-initiatives-detail.component';

describe('SubInitiativesDetailComponent', () => {
  let component: SubInitiativesDetailComponent;
  let fixture: ComponentFixture<SubInitiativesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubInitiativesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubInitiativesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
