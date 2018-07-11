import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectPage } from '../select/select';
import { ModePage } from '../mode/mode';

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
  }

  nextPage(){
    this.navCtrl.push(ModePage);
  }

}
