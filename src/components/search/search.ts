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

  songs:any;

  constructor(
    private viewCtrl: ViewController,
    private spottrackService: SpotTracksProvider) {  }
  searchSong:string = '';
  searchType:string = 'artist';
  offset:number = 0;
  dismiss() {
    this.viewCtrl.dismiss();
  }

  onInput(event) {
    let query:string = this.searchSong.replace(/ /gm, '+');
    console.log(query);
    let token = 'BQADq_jM0zIRYkUWjenhCu9a5_nkiYnzooloV8Q9XQKG02smzHxNnqdTOOt5VukmT0a2hW-b6297bUSUijKf-tmqXJNz2s6sX7CwvTLfsEnCvueKYQdmCp3qR3_gNAqygMuhekUQpHy1-MlWJ0NR-JQ54Mbz1A-PJKk'
    this.spottrackService.getTracks(token, query, this.offset).subscribe(data => {
      this.songs = data;
    });
    console.log(this.songs);
  }

  typeChanged(event){
    console.log(this.searchSong);
    console.log(this.searchType);
  }

}
