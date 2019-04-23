import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTreinoPage } from './form-treino.page';

describe('FormTreinoPage', () => {
  let component: FormTreinoPage;
  let fixture: ComponentFixture<FormTreinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTreinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
