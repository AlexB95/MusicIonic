import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {

  preview_url:String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.preview_url = navParams.get('preview_url');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

}
