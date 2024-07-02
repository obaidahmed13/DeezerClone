import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any;
  constructor() { }

  addToFavorites(track: any): void {
    this.favorites[track.id] = track;
  }

  removeFromFavorites(trackId: number) : void {
    delete this.favorites[trackId];
  }
}
