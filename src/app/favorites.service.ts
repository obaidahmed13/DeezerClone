import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private apiUrl = 'http://localhost:3000/favorites';

  constructor(private http: HttpClient) {}

  getAllFavorites(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToFavorites(track: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, track);
  }

  removeFromFavorites(trackId: number): Observable<any> {
    const url = `${this.apiUrl}/${trackId}`;
    return this.http.delete<any>(url);
  }

  isFavorite(trackId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/${trackId}`);
  }
}
