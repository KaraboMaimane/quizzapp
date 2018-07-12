import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ModePage } from '../mode/mode';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  track = "../../assets/aud/zola.mp3";
  stream = "../../assets/vids/mazuzu.mp4";
  constructor(public navCtrl: NavController,) {

  }

  ionViewDidEnter() {
    
  }

  nextPage() {
    this.navCtrl.push(ModePage);
  }

  about(){
    this.navCtrl.push(AboutPage);
  }

}
