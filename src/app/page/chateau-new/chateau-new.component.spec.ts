import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateauNewComponent } from './chateau-new.component';

describe('ChateauNewComponent', () => {
  let component: ChateauNewComponent;
  let fixture: ComponentFixture<ChateauNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChateauNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChateauNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
