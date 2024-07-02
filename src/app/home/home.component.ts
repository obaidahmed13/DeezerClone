import { Component } from '@angular/core';
import { DeezerService } from '../deezer.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tracks: any ;
  trackName: string = 'Views';
  artistName: string = 'Drake';
  favorites: any;

  constructor(private deezerServ: DeezerService, private favoriteServ: FavoritesService){}

  search(): void {
    this.deezerServ.searchTrackByName(this.artistName, this.trackName).subscribe(data=> {
      this.tracks = data.data;
      console.log(this.tracks)
    },
    error=>{
      console.log("Error getting track", error)
    });
  }

  likeTrack(track: any): void {
    if(this.favorites[track.id]) {
      delete this.favorites[track.id]
    } else {
      this.favorites[track.id] = track;
    }
  }
}
