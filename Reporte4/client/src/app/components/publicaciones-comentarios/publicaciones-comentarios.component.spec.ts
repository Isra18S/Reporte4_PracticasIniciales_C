import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesComentariosComponent } from './publicaciones-comentarios.component';

describe('PublicacionesComentariosComponent', () => {
  let component: PublicacionesComentariosComponent;
  let fixture: ComponentFixture<PublicacionesComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

