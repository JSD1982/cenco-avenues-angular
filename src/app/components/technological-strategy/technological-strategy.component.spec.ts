import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologicalStrategyComponent } from './technological-strategy.component';

describe('TechnologicalStrategyComponent', () => {
  let component: TechnologicalStrategyComponent;
  let fixture: ComponentFixture<TechnologicalStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologicalStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologicalStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
