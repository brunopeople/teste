import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {JogadorService} from '../jogador.service';
 
@Component({
  selector: 'app-jogador-add',
  templateUrl: './jogador-add.component.html',
  styleUrls: ['./jogador-add.component.css']
})
export class JogadorAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private js: JogadorService) {
  	this.createForm();
  }


  createForm(){
  	this.angForm = this.fb.group({
  		TagJogador:['', Validators.required],
  		Clan:['', Validators.required],
  		Ranking:['', Validators.required],
  	});
  }

  adicionarJogadores(TagJogador, Clan, Ranking){
  	this.js.adicionarJogadores(TagJogador, Clan, Ranking);
  }

  ngOnInit() {
  }

}
