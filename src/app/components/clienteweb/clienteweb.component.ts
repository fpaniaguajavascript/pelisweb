import { Component } from '@angular/core';
import { ConectorwebService } from '../../services/conectorweb.service';

@Component({
  selector: 'app-clienteweb',
  standalone: true,
  imports: [],
  templateUrl: './clienteweb.component.html',
  styleUrl: './clienteweb.component.css'
})
export class ClientewebComponent {
  constructor(private cws: ConectorwebService) {
    
  }
  obtenerInfo() {
    console.log("Obteniendo info...");
    this.cws.getMovies()?.subscribe((resultado) => {
      console.log(resultado);
    })
  };
}
