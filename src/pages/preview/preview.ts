import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song/song.interface';
import { Media, MediaObject } from '@ionic-native/media';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {

  playPause: string = "md-play";
  song: Song;
  loadProgress: number = 0;
  time: number = 0;
  timeSet: any;
  flag: boolean = false;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private media: Media,
    private platform: Platform) {
    
  }

  file: MediaObject;

  ionViewWillLoad() {
    this.platform.ready().then(() => {
      this.platform.pause.subscribe(() => {
        this.pauseSong();
      });
    });
    this.song = this.navParams.get('song');
  }

  ionViewWillLeave() {
    this.file.release();
  }

  playSong(url) {
    this.file = this.media.create(url);
    this.file.play();
    this.flag = true;
    this.timeSet = this.timeInterval();
  }

  pauseSong() {
    this.playPause = "md-play";
    this.file.pause();
    this.flag = false;
    clearInterval(this.timeSet);
  }

  timeInterval() {
    return setInterval(() => {
      if (this.time < 30) {
        if (!this.flag) {
          this.file.play();
          this.flag = true;
        }
        this.time++;
        this.loadProgress = (this.time / 30) * 100;
      } else {
        this.time = 0;
        this.flag = false;
        this.loadProgress = 0;
        this.playPause = "md-play";
        this.file.release();
        this.file = null;
        clearInterval(this.timeSet);
      }
    }, 1000);
  }

  playPauseSong() {
    if (this.playPause === "md-play") {
      this.playPause = "md-pause";
      if (!this.file) {
        this.playSong(this.song.preview_url);
      } else {
        this.timeSet = this.timeInterval();
      }
    } else {
      this.playPause = "md-play";
      if (this.file) {
        this.pauseSong();
      }
    }
  }
}
