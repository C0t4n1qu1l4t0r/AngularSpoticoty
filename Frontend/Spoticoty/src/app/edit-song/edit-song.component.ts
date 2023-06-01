import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SongComponent } from '../song/song/song.component';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent {
  artists: any[] = [];
  song: any;
  constructor(public router: Router, private songService: SongService) {
  }

  getArtists() {
    this.songService.artists()
      .subscribe((res) => {
        this.artists = res;
      })
  }

  edit(song: any) {
    this.songService.edit(song)
      .subscribe((res) => {
        this.song = res;
      })
  }



}
