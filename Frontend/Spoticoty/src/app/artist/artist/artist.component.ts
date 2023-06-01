import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artists: any[] = [];
  constructor(private artistService: ArtistService, private router: Router) { }

  ngOnInit() {
    this.index();
  }

  index() {
    this.artistService.index().subscribe(
      (res: any) => {
        this.artists = res;
      })
  }

  delete(id:any) {
    this.artistService.delete(id).subscribe(
      () => {
        this.router.navigate(['/']);
      });
  }
}
