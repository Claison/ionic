import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioPage } from './exercicio.page';

describe('ExercicioPage', () => {
  let component: ExercicioPage;
  let fixture: ComponentFixture<ExercicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
