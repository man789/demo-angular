import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex02aComponent } from './ex02a.component';

describe('Ex02aComponent', () => {
  let component: Ex02aComponent;
  let fixture: ComponentFixture<Ex02aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex02aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex02aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
