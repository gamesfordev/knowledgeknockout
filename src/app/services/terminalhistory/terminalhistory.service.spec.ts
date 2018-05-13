import { TestBed, inject } from '@angular/core/testing';

import { TerminalhistoryService } from './terminalhistory.service';

describe('TerminalhistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TerminalhistoryService]
    });
  });

  it('should be created', inject([TerminalhistoryService], (service: TerminalhistoryService) => {
    expect(service).toBeTruthy();
  }));
});
