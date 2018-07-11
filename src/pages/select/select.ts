import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TriviaPage } from '../trivia/trivia';
import { Trivia3Page } from '../trivia3/trivia3';
import { Trivia2Page } from '../trivia2/trivia2';
import { Trivia4Page } from '../trivia4/trivia4';
import { Trivia5Page } from '../trivia5/trivia5';

/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  loadPages(){
    this.navCtrl.push(TriviaPage);
  }

  ubani(){
    this.navCtrl.push(Trivia2Page)
  }

  bimba(){
    this.navCtrl.push(Trivia3Page);
  }

  guess(){
    this.navCtrl.push(Trivia4Page);
  }

  masala(){
    this.navCtrl.push(Trivia5Page);
  }

}
