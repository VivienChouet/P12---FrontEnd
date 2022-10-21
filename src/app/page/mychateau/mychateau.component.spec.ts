import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychateauComponent } from './mychateau.component';

describe('MychateauComponent', () => {
  let component: MychateauComponent;
  let fixture: ComponentFixture<MychateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychateauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MychateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
