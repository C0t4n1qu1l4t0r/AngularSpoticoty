import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../services/song.service';
import { Song } from '../edit-song/song.model';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent {
  artists: any[] = [];
  song: Song = new Song('','',1);
  constructor( public router: Router, private songService: SongService) {
    this.getArtists();
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
        this.router.navigate(['/home']);
      })
  }

}
