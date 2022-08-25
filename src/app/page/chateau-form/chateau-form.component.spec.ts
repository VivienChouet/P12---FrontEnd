import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateauFormComponent } from './chateau-form.component';

describe('ChateauFormComponent', () => {
  let component: ChateauFormComponent;
  let fixture: ComponentFixture<ChateauFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChateauFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChateauFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
