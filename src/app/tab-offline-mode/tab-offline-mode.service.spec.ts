import { TestBed } from '@angular/core/testing';

import { TabOfflineModeService } from './tab-offline-mode.service';

describe('TabOfflineModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabOfflineModeService = TestBed.get(TabOfflineModeService);
    expect(service).toBeTruthy();
  });
});
