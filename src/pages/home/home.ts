import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectPage } from '../select/select';
import triviaArray from '../../app/pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  track = "../../assets/aud/zola.mp3";
  stream = "../../assets/vids/mazuzu.mp4";
  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidEnter(){
    console.log(triviaArray);
  }

  nextPage(){
    this.navCtrl.push(SelectPage);
  }

}
