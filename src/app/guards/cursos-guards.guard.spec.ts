import { TestBed, async, inject } from '@angular/core/testing';

import { CursosGuardsGuard } from './cursos-guards.guard';

describe('CursosGuardsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosGuardsGuard]
    });
  });

  it('should ...', inject([CursosGuardsGuard], (guard: CursosGuardsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
