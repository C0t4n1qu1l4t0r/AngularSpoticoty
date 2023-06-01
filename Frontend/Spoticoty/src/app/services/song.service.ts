import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient, public router: Router) {
  }

  index(){
    return this.http.get(this.apiUrl + '/songs');
  }

  artists(){
    return this.http.get<Array<any>>(this.apiUrl + '/artists');
  }

  publish(song: any){
    const url = this.apiUrl + '/publish';
    return this.http.post<any>(url, song);
  }

  edit(song: any, songId: number){
    const url = this.apiUrl + '/song/' + songId + '/edit';
    const req = {
      ...song,
      songId
    }
    return this.http.put<any>(url, req);
  }

  delete(id:any){
    const url = this.apiUrl + '/song/' + id + '/delete';
    return this.http.delete<any>(url, id);
  }

}
