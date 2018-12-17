import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFriendPage } from './find-friend.page';

describe('FindFriendPage', () => {
  let component: FindFriendPage;
  let fixture: ComponentFixture<FindFriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFriendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
