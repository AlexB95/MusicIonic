import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song/song.interface';
import { Media, MediaObject } from '@ionic-native/media';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';

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
constructor(
  private navCtrl: NavController,
  private navParams: NavParams,
  private media: Media) {

}

file: MediaObject;

ionViewWillLoad() {
  this.song = this.navParams.get('song');
}

ionViewWillLeave() {
  this.file.release();
}

playSong(url) {
  this.file = this.media.create(url);
  this.file.play();
  this.timeSet = this.timeInterval();
}

timeInterval() {
  return setInterval(() => {
    if (this.time < 30) {
      this.time++;
      this.loadProgress = (this.time / 30) * 100;
    } else {
      clearInterval(this.timeSet);
      this.time == 0;
      this.loadProgress = 0;
      this.file.release();
      this.playPause = "md-play";
    }
  }, 1000);
}

pauseSong() {
  this.file.pause();
}

playPauseSong() {
  if (this.playPause === "md-play") {
    this.playPause = "md-pause";
    if (!this.file) {
      this.playSong(this.song.preview_url);
    } else {
      this.file.play();
      this.timeSet = this.timeInterval();
    }
  } else {
    this.playPause = "md-play";
    if (this.file) {
      this.pauseSong();
      clearInterval(this.timeSet);
    }
  }
}
}
