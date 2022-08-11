import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateauSingleComponent } from './chateau-single.component';

describe('ChateauSingleComponent', () => {
  let component: ChateauSingleComponent;
  let fixture: ComponentFixture<ChateauSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChateauSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChateauSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
