import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditArtistComponent } from './edit-artist/edit-artist/edit-artist.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { CreateSongComponent } from './create-song/create-song.component';
import { CreateArtistComponent } from './create-artist/create-artist/create-artist.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'publish', component: CreateSongComponent},
  {path: 'start', component: CreateArtistComponent},
  {path: 'artist/:id/edit', component: EditArtistComponent},
  {path: 'song/:id/edit',component: EditSongComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
