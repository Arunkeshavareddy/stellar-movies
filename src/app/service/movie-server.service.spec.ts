import { TestBed, inject } from '@angular/core/testing';

import { MovieServerService } from './movie-server.service';

describe('MovieServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieServerService]
    });
  });

  it('should be created', inject([MovieServerService], (service: MovieServerService) => {
    expect(service).toBeTruthy();
  }));
});
