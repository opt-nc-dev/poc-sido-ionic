import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGeolocationPage } from './tab-geolocation.page';

describe('Tab1Page', () => {
  let component: TabGeolocationPage;
  let fixture: ComponentFixture<TabGeolocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGeolocationPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGeolocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
