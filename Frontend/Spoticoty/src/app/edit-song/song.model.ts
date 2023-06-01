export class Song {
  name: string;
  duration : string;
  artist_id : number;

  constructor(name: string, duration: string, artist_id: number) {
    this.name = name;
    this.duration = duration;
    this.artist_id = artist_id;
  }
}
