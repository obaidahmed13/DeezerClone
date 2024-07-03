import { Component } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favorites: any[] = [];
  constructor(public favServ: FavoritesService) {}

  ngOnInit(): void {
    this.favServ.getAllFavorites().subscribe(data => {
      this.favorites = data;
      console.log(this.favorites);
    },
    error => {
      console.log("Error getting favorites", error);
    });
  }

  
}
 