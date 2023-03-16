import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesComentariosListComponent } from './publicaciones-comentarios-list.component';

describe('PublicacionesComentariosListComponent', () => {
  let component: PublicacionesComentariosListComponent;
  let fixture: ComponentFixture<PublicacionesComentariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesComentariosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesComentariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
