import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  //ARMAZENA ENDEREÇO DA API
  url = "http://localhost:3000/noticias";
  //INSERE DEPENDENCIA
  constructor( private httpClient: HttpClient ) { }
  //ARMAZENA CONFIGURAÇÃO
  httpOptions = 
  {
    headers: new HttpHeaders( { 'Content-Type': 'application/json' } )
  }
  //MÉTODO GET DAS NOTÍCIAS
  getNoticias(): Observable< Noticia[] >
  {
    return this.httpClient.get< Noticia[] >( this.url )
  }
}
