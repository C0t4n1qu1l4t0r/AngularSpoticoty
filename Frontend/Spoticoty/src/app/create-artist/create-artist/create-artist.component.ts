import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from './artist.model';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent {
  artist: Artist = new Artist('');
  constructor(public router: Router, private artistService: ArtistService) {
  }

  start() {
    console.log(this.artist);

    this.artistService.start(this.artist)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.artist = res.data;
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
}
