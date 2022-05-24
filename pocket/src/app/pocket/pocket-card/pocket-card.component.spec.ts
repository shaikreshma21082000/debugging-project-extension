import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketCardComponent } from './pocket-card.component';

describe('PocketCardComponent', () => {
  let component: PocketCardComponent;
  let fixture: ComponentFixture<PocketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocketCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
