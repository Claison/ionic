import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormPeriodizacaoPage } from './form-periodizacao.page';

const routes: Routes = [
  {
    path: '',
    component: FormPeriodizacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormPeriodizacaoPage]
})
export class FormPeriodizacaoPageModule {}
