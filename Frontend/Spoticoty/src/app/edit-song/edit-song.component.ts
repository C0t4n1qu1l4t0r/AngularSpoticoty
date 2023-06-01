import { Component } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { SongService } from '../services/song.service';
import { Song } from './song.model';


@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent {
  artists: any[] = [];
  song: Song = new Song('','',1);
  constructor(public router: Router, private songService: SongService, private route: ActivatedRoute ) {
    this.getArtists();
  }

  getArtists() {
    this.songService.artists()
      .subscribe((res) => {
        this.artists = res;
      })
  }

  edit() {
      const artistId = this.route.snapshot.params['id'];

      console.log(this.song,artistId);

      this.songService.edit(this.song,artistId).subscribe(
        (res: any) => {
          console.log(res);
          this.song = res.data;
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.error(error);
        }
      );
  }



}
