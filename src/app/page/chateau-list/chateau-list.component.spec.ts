import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateauListComponent } from './chateau-list.component';

describe('ChateauListComponent', () => {
  let component: ChateauListComponent;
  let fixture: ComponentFixture<ChateauListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChateauListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChateauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
