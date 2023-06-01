import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient, public router: Router) {
  }

  index(){
    return this.http.get(this.apiUrl + '/artists');
  }

  start(artist: any) {
    let url = this.apiUrl + '/start';
    return this.http.post<any>(url, artist);
  }

  edit(artist: any, artistId: number) {
    let url = this.apiUrl + '/artist/' + artistId + '/edit';
    const req = {
      ...artist,
      artistId
    }
    return this.http.put<any>(url, req);
  }

  delete(id:any){
    let url = this.apiUrl + '/artist/' + id + '/delete';
    return this.http.delete<any>(url, id);
  }

}
