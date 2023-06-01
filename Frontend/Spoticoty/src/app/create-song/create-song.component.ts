import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent {
  artists: any[] = [];
  song: any;
  constructor( public router: Router, private songService: SongService) {
  }

  getArtists() {
    this.songService.artists()
      .subscribe((res) => {
        this.artists = res;
      })
  }


  publish(song: any) {
    this.songService.publish(song)
      .subscribe((res) => {
        this.song = res;
      })
  }

}
