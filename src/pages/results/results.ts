import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import scoreArray from '../../assets/resources/score';
import { ModePage } from '../mode/mode';
/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  scoreArray = scoreArray;
  score: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter(){
    for(let i = 0; i < this.scoreArray.length; i++){
      this.score += this.scoreArray[i].correct;
    }
    this.score /= this.scoreArray.length;
  }

  backToMode(){
    this.navCtrl.push(ModePage);
  }

}
