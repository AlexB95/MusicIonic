import { Song } from './../../models/song/song.interface';
import { MusicService } from './../../providers/music/music';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ionViewWillLoad() {
    this.songService.getSongs().subscribe((data: Song[]) => {
      this.songs = data;
    });
  }

  songs: Song[];
  constructor(public navCtrl: NavController, private songService: MusicService) {

  }
}