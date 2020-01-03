import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {JogadorService} from '../jogador.service';

@Component({
  selector: 'app-jogador-edit',
  templateUrl: './jogador-edit.component.html',
  styleUrls: ['./jogador-edit.component.css']
})
export class JogadorEditComponent implements OnInit {

	angForm: FormGroup;
	jogador: any = {};

  constructor(private route:  ActivatedRoute, 
    private router: Router, 
    private js: JogadorService, 
    private fb: FormBuilder) {
  	this.createForm();
   }

   createForm(){
   	this.angForm = this.fb.group({
   		TagJogador: ['', Validators.required],
   		Clan: ['', Validators.required],
   		Ranking: ['', Validators.required]
   	});
   }


  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.js.editJogador(params.id).subscribe( res => {
  			this.jogador = res;
  		});
  	});
  }

  	updateJogador(TagJogador, Clan, Ranking, id) {
  		this.route.params.subscribe(params => {
  			this.js.updateJogador(TagJogador, Clan, Ranking, params.id);
  			this.router.navigate(['products']);
  		});
  	}
}

