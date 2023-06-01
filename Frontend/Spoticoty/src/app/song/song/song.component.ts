import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongService } from 'src/app/services/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent {
  songs: any[] = [];
  id: any;
  constructor(private songService: SongService, private router: Router) {}

  ngOnInit() {
    this.index();
  }

  index() {
    this.songService.index().subscribe((res: any) => {
      this.songs = res;
    });
  }

  delete(id: any) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this artist?'
    );
    if (confirmDelete) {
      this.songService.delete(id).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
