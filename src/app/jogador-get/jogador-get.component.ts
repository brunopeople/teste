import { Component, OnInit } from '@angular/core';
import Jogador from '../jogador';
import {JogadorService} from '../jogador.service';

@Component({
  selector: 'app-jogador-get',
  templateUrl: './jogador-get.component.html',
  styleUrls: ['./jogador-get.component.css']
})
export class JogadorGetComponent implements OnInit {

 
  jogadores: Jogador[];
  constructor(private js: JogadorService){}

  
  ngOnInit() {
  	this.js
  	.getJogador()
  	.subscribe((data: Jogador[]) => {
  		this.jogadores = data; 
  	 });
  	}

  	deleteJogador(id){
  		this.js.deleteJogador(id).subscribe(res =>{
  			this.jogadores.splice(id, 1);
  		});
  	}
  }
