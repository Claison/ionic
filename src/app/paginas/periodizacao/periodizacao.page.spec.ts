import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodizacaoPage } from './periodizacao.page';

describe('PeriodizacaoPage', () => {
  let component: PeriodizacaoPage;
  let fixture: ComponentFixture<PeriodizacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodizacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
