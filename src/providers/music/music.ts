import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MusicService {

  constructor(public http: HttpClient) {
  }
  getSongs() {
    return this.http.get('https://ionic-songhop.herokuapp.com/recommendations');
  }
}
