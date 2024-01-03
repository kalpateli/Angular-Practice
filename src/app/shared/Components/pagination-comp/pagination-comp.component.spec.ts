import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCompComponent } from './pagination-comp.component';

describe('PaginationCompComponent', () => {
  let component: PaginationCompComponent;
  let fixture: ComponentFixture<PaginationCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationCompComponent]
    });
    fixture = TestBed.createComponent(PaginationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
