import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  URL = 'https://developer.clashofclans.com';
  constructor(private http: HttpClient) { }

 	addJogador(TagJogador, Clan, Ranking){
 		const obj = {
 		 TagJogador,
 		 Clan,
 		 Ranking
 		};

 		console.log(obj);
 			this.http.post(`${this.URL}/add`, obj)
 			.subscribe(res => console.log('Cadastrado!'));
 	}

 	getJogador(){
 		return this
 			   .http
 			   .get(`${this.URL}`);
 	}
  
  editJogador(id){
  	return this
  		   .http
  		   .get(`${this.URL}/edit/${id}`);
  }

  updateJogador(TagJogador,Clan, Ranking, id){
  	const obj = {
  		TagJogador,
  		Clan,
  		Ranking
  	};
  	this
  	.http
  	.post(`${this.URL}/update/${id}`, obj)
  	.subscribe(res => console.log('Atualização Completo'));
  }

  deleteJogador(id){
  	return this
  			.http.get(`${this.URL}/delete/${id}`);
  }
}
  	
  


 
	


