import { Component } from '@angular/core';
import { DeezerService } from '../deezer.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {
  tracks: any;

  constructor(private deezerServ: DeezerService,
    private favoriteServ: FavoritesService) {}

  ngOnInit(): void {
   
  }
  
  


}
