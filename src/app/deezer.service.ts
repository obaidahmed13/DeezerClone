import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  private trackURL = "https://api.deezer.com/search";

  constructor(private http: HttpClient) { }

  searchTrackByName(artistName: string,trackName: string): Observable<any> {
    const url = `${this.trackURL}?q=artist:"${artistName}" track:"${trackName}"`;
    return this.http.get<any>(url);
  }

}
