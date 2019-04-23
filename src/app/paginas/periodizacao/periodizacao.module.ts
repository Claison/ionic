import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeriodizacaoPage } from './periodizacao.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodizacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeriodizacaoPage]
})
export class PeriodizacaoPageModule {}
