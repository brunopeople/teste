import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {

	jogadores: Array<any>;

  constructor(private jogadorService: Jogador) { }

  listarjogadores(){
  	this.jogadorService.listarjogadores().subscribe(dados => this.jogadores = dados);
  }

  ngOnInit() {

  	this.listarjogadores();
  }

}
