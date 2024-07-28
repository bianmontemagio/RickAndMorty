import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

  obtenerPersonajes(gender:string= '', status:string=''): Observable<any> {
    let url = `${this.apiUrl}?`;
    if (gender) {
      url += `&gender=${gender}`;
    }
    if (status) {
      url += `&status=${status}`;
    }
    return this.http.get(url);
  }

  irAPagina(page: string, gender:string='', status: string= ''): Observable<any> {
    let url = `${this.apiUrl}${page}`;
    if (gender) {
      url += `&gender=${gender}`;
    }
    if (status) {
      url += `&status=${status}`;
    }
    return this.http.get(url);
  }
 }


