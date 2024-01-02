import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesPageComponent } from './leaves-page.component';

describe('LeavesPageComponent', () => {
  let component: LeavesPageComponent;
  let fixture: ComponentFixture<LeavesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavesPageComponent]
    });
    fixture = TestBed.createComponent(LeavesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
