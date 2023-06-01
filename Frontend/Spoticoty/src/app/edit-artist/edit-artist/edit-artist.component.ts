import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from './artist.model';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css'],
})
export class EditArtistComponent {
  artist: Artist = new Artist('');
  constructor(private router: Router, private artistService: ArtistService, private route: ActivatedRoute) {}


  edit() {
    const artistId = this.route.snapshot.params['id'];

    console.log(this.artist,artistId);

    this.artistService.edit(this.artist,artistId).subscribe(
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
