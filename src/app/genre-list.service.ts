import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreListService {
  genreList = [
    {
      genre: "Rap",
      img: "https://cdn-icons-png.flaticon.com/512/1804/1804649.png"
    },
    {
      genre: "R&B",
      img: "https://cdn-icons-png.flaticon.com/512/1804/1804649.png"
    },
    {
      genre: "Pop",
      img: "https://cdn-icons-png.flaticon.com/512/1804/1804649.png"
    },
    {
      genre: "Chill",
      img: "https://cdn-icons-png.flaticon.com/512/1804/1804649.png"
    },
    {
      genre: "Dance",
      img: "https://cdn-icons-png.flaticon.com/512/1804/1804649.png"
    },
  ]
  
}
