import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent {
  artist : any;
  constructor(public router: Router, private artistService: ArtistService) {
  }

  edit(artist: any) {
    this.artistService.edit(artist)
      .subscribe((res) => {
        this.artist = res;
      })
  }

}
