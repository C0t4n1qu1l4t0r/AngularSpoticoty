import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './song/song/song.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { CreateSongComponent } from './create-song/create-song.component';
import { ArtistComponent } from './artist/artist/artist.component';
import { CreateArtistComponent } from './create-artist/create-artist/create-artist.component';
import { EditArtistComponent } from './edit-artist/edit-artist/edit-artist.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    EditSongComponent,
    CreateSongComponent,
    ArtistComponent,
    CreateArtistComponent,
    EditArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
