import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  artists: any[] = [];
  constructor(private artistService: ArtistService, private router: Router) {}

  ngOnInit() {
    this.index();
  }

  index() {
    this.artistService.index().subscribe((res: any) => {
      this.artists = res;
    });
  }

  delete(id: any) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this artist?'
    );
    if (confirmDelete) {
      this.artistService.delete(id).subscribe(
        (res: any) => {
          console.log(res);
          window.location.reload();
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
