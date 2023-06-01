import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent {
  artist : any;
  constructor(public router: Router, private artistService: ArtistService) {
  }

  start(artist: any) {
    this.artistService.start(artist)
      .subscribe((res:any) => {
        this.artist = res;
      })
  }

}
