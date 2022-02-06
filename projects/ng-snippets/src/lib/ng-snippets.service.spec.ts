import { TestBed } from '@angular/core/testing';

import { NgSnippetsService } from './ng-snippets.service';

describe('NgSnippetsService', () => {
  let service: NgSnippetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSnippetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
