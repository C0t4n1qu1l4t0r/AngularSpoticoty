import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient, public router: Router) {
  }

  index(){
    return this.http.get(this.apiUrl + '/playlists');
  }

  users(){
    return this.http.get(this.apiUrl + '/users');
  }

  create(playlist: any){
    const url = this.apiUrl + '/create';
    return this.http.post<any>(url, playlist);
  }

  edit(playlist: any){
    const url = this.apiUrl + '/playlist/' + playlist.id + '/edit';
    return this.http.put<any>(url, playlist);
  }

  delete(id:any){
    const url = this.apiUrl + '/playlist/' + id + '/delete';
    return this.http.delete<any>(url, id);
  }
}
