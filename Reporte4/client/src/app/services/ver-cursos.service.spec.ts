import { TestBed } from '@angular/core/testing';

import { VerCursosService } from './ver-cursos.service';

describe('VerCursosService', () => {
  let service: VerCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
