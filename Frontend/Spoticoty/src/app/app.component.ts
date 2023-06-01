import { Component } from '@angular/core';
import { SongComponent } from './song/song/song.component';
import { ArtistComponent } from './artist/artist/artist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spoticoty';
}
