import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewITModelComponent } from './new-itmodel.component';

describe('NewITModelComponent', () => {
  let component: NewITModelComponent;
  let fixture: ComponentFixture<NewITModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewITModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewITModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
