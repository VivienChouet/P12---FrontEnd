import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateauDetailComponent } from './chateau-detail.component';

describe('ChateauDetailComponent', () => {
  let component: ChateauDetailComponent;
  let fixture: ComponentFixture<ChateauDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChateauDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChateauDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
