import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobadoslistComponent } from './aprobadoslist.component';

describe('AprobadoslistComponent', () => {
  let component: AprobadoslistComponent;
  let fixture: ComponentFixture<AprobadoslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobadoslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobadoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
