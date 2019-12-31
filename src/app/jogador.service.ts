import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
apiURL = 'https://developer.clashofclans.com';
  constructor(private http: HttpClient) { }

listarjogadores(){
 return this.http.get<any[]>(`${this.apiURL}`);
	}

}
