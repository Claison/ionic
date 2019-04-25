import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './paginas/login/login.module#LoginPageModule' },
  { path: 'home',loadChildren: './home/home.module#HomePageModule'},
  { path: 'periodizacao', loadChildren: './paginas/periodizacao/periodizacao.module#PeriodizacaoPageModule' },
  { path: 'treino', loadChildren: './paginas/treino/treino.module#TreinoPageModule' },
  { path: 'form-periodizacao', loadChildren: './paginas/form-periodizacao/form-periodizacao.module#FormPeriodizacaoPageModule' },
  { path: 'form-treino', loadChildren: './paginas/form-treino/form-treino.module#FormTreinoPageModule' },
  { path: 'exercicio', loadChildren: './paginas/exercicio/exercicio.module#ExercicioPageModule' },
  { path: 'editar-perfil', loadChildren: './paginas/editar-perfil/editar-perfil.module#EditarPerfilPageModule' },
  { path: 'registro', loadChildren: './paginas/registro/registro.module#RegistroPageModule' },  { path: 'chat', loadChildren: './paginas/chat/chat.module#ChatPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
