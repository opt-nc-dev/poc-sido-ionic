import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOfflineModeComponent } from './tab-offline-mode.component';

describe('TabOfflineModeComponent', () => {
  let component: TabOfflineModeComponent;
  let fixture: ComponentFixture<TabOfflineModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOfflineModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOfflineModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
