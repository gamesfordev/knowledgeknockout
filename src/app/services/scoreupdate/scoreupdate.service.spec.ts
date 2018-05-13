import { TestBed, inject } from '@angular/core/testing';

import { ScoreupdateService } from './scoreupdate.service';

describe('ScoreupdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreupdateService]
    });
  });

  it('should be created', inject([ScoreupdateService], (service: ScoreupdateService) => {
    expect(service).toBeTruthy();
  }));
});
