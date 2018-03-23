import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SpotTracksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpotTracksProvider {
  constructor(private http: HttpClient) {
    this.refresh_token();
  }

  token:string;

  refToken:any = () => {
    setInterval(() =>{
      this.refresh_token();
    }, 300000);
  }

  getTracks(query, type, offset) {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    let url:string = 'https://api.spotify.com/v1/search?query='+query+'&type='+type+'&market=MX&offset='+offset+'&limit=20';
    return this.http.get(url, {headers});
  }
  refresh_token() {
    let url:string = 'https://accounts.spotify.com/api/token';
    let headers:any  = new HttpHeaders()
    .set('Authorization', 'Basic OWI3NzlkYmY2NThjNDg1N2IwODEyMTMwZmFlMDY4Yjk6ODY4MTUyM2VlNTk4NGE4ODk3NTNlMDRhYTczZWVkY2I=')
    .append('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', "AQDrJGIhfxfWLcnW8Ig8qanoplA9B_DsEm3RJ8m0IwvrMYopR2t5i22e8Q0ByLtLZIRLINLdsq-vGTlPo0znBdNLeTRk2dwVa4swct6u43La2_ewDXOE1gCw-je2x9vxhpk");
    this.http.post(url, body.toString(), {headers, observe: 'response'}).subscribe((data:any) => {
      this.token = data.body.access_token;
    });
  }
}