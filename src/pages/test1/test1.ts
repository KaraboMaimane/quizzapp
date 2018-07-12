import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import triviaArray from '../../assets/resources/trivia';
import { Test2Page } from '../test2/test2';
import { LoadpPage } from '../loadp/loadp';
import scoreArray, { Score } from '../../assets/resources/score';

/**
 * Generated class for the Test1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test1',
  templateUrl: 'test1.html',
})
export class Test1Page {
  random = Math.floor(Math.random() * 5);
  triviaArra = triviaArray[this.random];
  items;
  correct: number = 0;
  incorrect: number = 0;
  counter: number = 0;
  scoreArray = scoreArray;

  reducer = (initVal, currVal) => initVal + currVal;//our reducer function

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController, ) {
  }

  ngOnInit() {
  }

  compare(answer) {
    this.counter++;
    if(this.counter < 5){
      if (answer == this.triviaArra.answer) {
        const toast = this.toastCtrl.create({
          message: 'That Was Correct',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();
        this.correct++;
        this.randomise();
      } else {
        const toast = this.toastCtrl.create({
          message: 'That Was Not Correct',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();
        this.incorrect++;
        this.randomise();
      }
    }else{
      const alert = this.alertCtrl.create({
        title: 'Quiz completed',
        subTitle: `Proceed to another category`,
        buttons: [{
          text: 'Okay',
          handler: () => {
            if (answer == this.triviaArra.answer) {
              this.correct++;
              let scoreIns = new Score("Trivia", this.correct, this.incorrect);
              scoreArray.push(scoreIns);
              this.navCtrl.popTo(LoadpPage);
              this.navCtrl.push(Test2Page);
            } else {
              this.incorrect++;
              let scoreIns = new Score("Trivia", this.correct, this.incorrect);
              scoreArray.push(scoreIns);
              this.navCtrl.popTo(LoadpPage);
              this.navCtrl.push(Test2Page);
            }
          }
        }]
      });
      alert.present();
    }
  }

  randomise() {
    this.random = Math.floor(Math.random() * 5);
    this.triviaArra = triviaArray[this.random];
  }


}
