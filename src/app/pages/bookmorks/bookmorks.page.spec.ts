import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmorksPage } from './bookmorks.page';

describe('BookmorksPage', () => {
  let component: BookmorksPage;
  let fixture: ComponentFixture<BookmorksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmorksPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmorksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
