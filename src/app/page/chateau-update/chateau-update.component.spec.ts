import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateauUpdateComponent } from './chateau-update.component';

describe('ChateauUpdateComponent', () => {
  let component: ChateauUpdateComponent;
  let fixture: ComponentFixture<ChateauUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChateauUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChateauUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
