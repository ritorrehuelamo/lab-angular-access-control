/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccessControlLogService } from './access-control-log.service';

describe('AccessControlLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessControlLogService]
    });
  });

  it('should ...', inject([AccessControlLogService], (service: AccessControlLogService) => {
    expect(service).toBeTruthy();
  }));
});
