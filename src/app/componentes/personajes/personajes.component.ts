import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../servicios/rick-and-morty.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit {
  listaPersonajes: any[] = [];
  nextPage: string = '';
  prevPage: string = '';
  gender: string = '';
  status: string ='';
  
  constructor(
    private rickService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.buscoPersonajes();
  }

  buscoPersonajes() {
    this.gender = '';
    this.status = '';
    this.rickService.obtenerPersonajes(this.gender, this.status).subscribe((data) => {
      this.actualizaPropiedades(data);
      console.log(data);
    });
  }

  irA(pagina: string) {
    this.rickService.irAPagina(pagina, this.gender, this.status).subscribe(data => {
      this.actualizaPropiedades(data);
      console.log(data);
    })
  }

  actualizaPropiedades(data: any) {
    this.listaPersonajes = data.results;
    this.nextPage = data.info.next ? '?' + data.info.next.split('?')[1] : '';
    this.prevPage = data.info.prev ? '?' + data.info.prev.split('?')[1] : '';
  
    this.listaPersonajes.forEach(personaje => {
      console.log(personaje);
      console.log(personaje.image);
    });
  }
  buscoPersonajesFiltrados() {
    this.rickService.obtenerPersonajes(this.gender, this.status).subscribe((data) => {
      this.actualizaPropiedades(data);
      console.log(data);
    });
  }
  filtrarGenero(gender:string){
    this.gender = gender;
    this.buscoPersonajesFiltrados();
  }
  filtrarEstado(status:string){
    this.status = status;
    this.buscoPersonajesFiltrados();
  }
}
