import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGRXpracticeComponent } from './ngrxpractice.component';

describe('NGRXpracticeComponent', () => {
  let component: NGRXpracticeComponent;
  let fixture: ComponentFixture<NGRXpracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NGRXpracticeComponent]
    });
    fixture = TestBed.createComponent(NGRXpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
