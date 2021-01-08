import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTotalComponent } from './books-total.component';

describe('BooksTotalComponent', () => {
  let component: BooksTotalComponent;
  let fixture: ComponentFixture<BooksTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksTotalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
