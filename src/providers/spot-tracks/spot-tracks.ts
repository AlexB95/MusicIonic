import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SpotTracksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpotTracksProvider {

  constructor(public http: HttpClient) {
  }

  getTracks(token, query, offset) {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('https://api.spotify.com/v1/search?query='+query+'&type=track&market=MX&offset='+offset+'&limit=20', {headers});
  }

}