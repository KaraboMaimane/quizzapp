import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Loading } from 'ionic-angular';
import guessArray from '../../assets/resources/guess';
import { Test5Page } from '../test5/test5';
import { LoadpPage } from '../loadp/loadp';
import scoreArray, { Score } from '../../assets/resources/score';
/**
 * Generated class for the Test4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test4',
  templateUrl: 'test4.html',
})
export class Test4Page {
  random = Math.floor(Math.random() * 5);
  guessArra = guessArray[this.random];
  items;
  correct: number = 0;
  incorrect: number = 0;
  counter: number = 0;

  reducer = (initVal, currVal) => initVal + currVal;//our reducer function

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ngOnInit() {
  }

  compare(answer) {
    this.counter++;
    if (this.counter < 5) {
      if (answer == this.guessArra.answer) {
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
    } else {
      const alert = this.alertCtrl.create({
        title: 'Quiz Completed',
        subTitle: 'Choose another category...',
        buttons: [{
          text: 'Okay',
          handler: () => {
            if (answer == this.guessArra.answer) {
              this.correct++;
              let scoreIns = new Score("Bimba", this.correct, this.incorrect);
              scoreArray.push(scoreIns);
              this.navCtrl.popTo(LoadpPage);
              this.navCtrl.push(Test5Page);
            } else {
              this.incorrect++;
              let scoreIns = new Score("Bimba", this.correct, this.incorrect);
              scoreArray.push(scoreIns);
              this.navCtrl.popTo(LoadpPage);
              this.navCtrl.push(Test5Page);
            }
          }
        }],
      });
      alert.present();
    }
  }

  randomise() {
    this.random = Math.floor(Math.random() * 5);
    this.guessArra = guessArray[this.random];
  }
}
