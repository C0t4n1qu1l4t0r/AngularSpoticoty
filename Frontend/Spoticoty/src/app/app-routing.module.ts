import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditArtistComponent } from './edit-artist/edit-artist/edit-artist.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { CreateSongComponent } from './create-song/create-song.component';
import { CreateArtistComponent } from './create-artist/create-artist/create-artist.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
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
