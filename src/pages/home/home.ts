import { Song } from './../../models/song/song.interface';
import { MusicService } from './../../providers/music/music';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { SearchComponent } from '../../components/search/search';

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
  constructor(
    private navCtrl: NavController, 
    private songService: MusicService,
    private modalCtrl: ModalController) {

  }

  openModal() {

    let modal = this.modalCtrl.create(SearchComponent);
    modal.present();
  }

}