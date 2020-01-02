import { Component, OnInit } from '@angular/core';
import jogador from '../jogador';
import {JogadorService} from '../jogador.service';

@Component({
  selector: 'app-jogador-get',
  templateUrl: './jogador-get.component.html',
  styleUrls: ['./jogador-get.component.css']
})
export class JogadorGetComponent implements OnInit {

  angForm: FormGroup;
  jogador: any = {};

  constructor(private route: ActivedRoute, private router: Router, private js: JogadorService,
  	private fb: FormBuilder) {
  		this.createForm();
  	 }

  	 createForm(){
  	 	this.angForm = this.fb.group({
  	 		TagJogador:['', Validators.required],
  	 		Clan: ['',Validators.required],
  	 		Ranking:['', Validators.required]
  	 	});
  	 }

  ngOnInit() {
  	this.route.params.subscribe(params =>{
  		this.js.editJogador(params:id).subscribe(res =>{
  			this.jogador = res; 
  		});
  	});

  	updateJogador(TagJogador, Clan, Ranking, id){
  		this.route.params.subscribe(params => {
  			this.js.updateJogador(TagJogador, Clan, Ranking, params.id);
  			this.router.navigate(['jogadores']);
  		});
  	}
  }
  	
