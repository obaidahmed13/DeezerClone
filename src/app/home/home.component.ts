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
  trackName: string = '';
  artistName: string = '';
  favorites: any;

  constructor(private deezerServ: DeezerService, public favServ: FavoritesService){}

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
    this.favServ.addToFavorites(track).subscribe(() => {
      console.log('Added to favorites', track);
    },
    error => {
      console.log('Error adding to favorites', error);
    });
  }
}
