import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})
export class ConectorwebService {
  static URL = "https://fpaniaguajavascript.github.io/movies/movies-1900s.json";
  constructor(private clienteHttp:HttpClient) { }
  getMovies() {
    return this.clienteHttp?.get<any>(ConectorwebService.URL);//Devuelve un Observable
  }
}
