import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JogadorAddComponent} from './jogador-add/jogador-add.component';
import {JogadorGetComponent} from './jogador-get/jogador-get.component';
import {JogadorEditComponent} from './jogador-edit/jogador-edit.component';


const routes: Routes = [
 
 {
	path:'jogador/create',
	component: JogadorAddComponent
 },

 {
	path: 'edit/:id',
	component: JogadorEditComponent
 },

 {
	path: 'jogadores',
	component: JogadorGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
