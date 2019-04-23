import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPeriodizacaoPage } from './form-periodizacao.page';

describe('FormPeriodizacaoPage', () => {
  let component: FormPeriodizacaoPage;
  let fixture: ComponentFixture<FormPeriodizacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPeriodizacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPeriodizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
