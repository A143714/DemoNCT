import { TestBed, inject } from '@angular/core/testing';

import { SplunkApiService } from './splunk-api.service';

describe('SplunkApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplunkApiService]
    });
  });

  it('should be created', inject([SplunkApiService], (service: SplunkApiService) => {
    expect(service).toBeTruthy();
  }));
});
