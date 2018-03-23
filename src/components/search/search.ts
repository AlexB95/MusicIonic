import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SpotTracksProvider } from '../../providers/spot-tracks/spot-tracks';
/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {
  songs: any = [];

  constructor(
    private viewCtrl: ViewController,
    private spottrackService: SpotTracksProvider) {
    }
  searchSong: string = '';
  searchType: string = 'artist';
  offset: number = 0;
  total: number = 1;
  elements = 0;
  dismiss() {
    this.viewCtrl.dismiss();
  }

  onInput(event) {
    this.offset = 0;
    this.elements = 0;
    if (this.searchSong !== '') {
      let query: string = this.searchSong.replace(/ /gm, '+');
      if (query !== ' ' && query !== '' && this.searchSong !== '') {
        this.spottrackService.getTracks(query, this.searchType, this.offset).subscribe((data: any) => {
          this.elements += 20;
          this.offset += 20;
          switch (this.searchType) {
            case 'artist':
              this.total = data.artists.total;
              this.songs = data.artists.items;
              break;
            case 'album':
              this.total = data.albums.total;
              this.songs = data.albums.items;
              break;
            case 'track':
              this.total = data.tracks.total;
              this.songs = data.tracks.items;
              break;
          }
        });
      }
    } else {
      this.songs = [];
    }
  }

  typeChanged(event) {
    this.total = 0;
    this.elements = 0;
    this.onInput(event);
  }

  onCancel(event) {
    this.total = 0;
    this.elements = 0;
    this.songs = [];
  }

  onClear(event) {
    this.total = 0;
    this.elements = 0;
    this.songs = [];
  }

  doInfinite(event) {
    setTimeout(() => {
      let query: string = this.searchSong.replace(/ /gm, '+');
      if (query !== ' ' && query !== '' && this.searchSong !== '') {
        this.spottrackService.getTracks(query, this.searchType, this.offset).subscribe((data: any) => {
          this.elements += 20;
          this.offset += 20;
          switch (this.searchType) {
            case 'artist':
              this.total = data.artists.total;
              for (let i: number = 0; i < 20; i++) {
                if (data.artists.items[i])
                  this.songs.push(data.artists.items[i]);
              }
              break;
            case 'album':
              this.total = data.albums.total;
              for (let i: number = 0; i < 20; i++) {
                if (data.albums.items[i])
                  this.songs.push(data.albums.items[i]);
              }
              break;
            case 'track':
              this.total = data.tracks.total;
              for (let i: number = 0; i < 20; i++) {
                if (data.tracks.items[i])
                  this.songs.push(data.tracks.items[i]);
              }
              break;
          }
        });
      }
      event.complete();
    }, 500);
  }
}
