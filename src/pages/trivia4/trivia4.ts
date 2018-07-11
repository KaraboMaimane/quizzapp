import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import guessArray from '../../assets/resources/guess';

/**
 * Generated class for the Trivia4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trivia4',
  templateUrl: 'trivia4.html',
})
export class Trivia4Page {
  random = Math.floor(Math.random() * 5);
  guessArra = guessArray[this.random];
  items;
  correct: number = 0;
  incorrect: any;
  counter: number = 0;

  reducer = (initVal, currVal) => initVal + currVal;//our reducer function

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ngOnInit() {
  }

  compare(answer) {
    if(this.counter < 5){
      if (answer == this.guessArra.answer) {
        const toast = this.toastCtrl.create({
          message: 'That Was Correct',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();
        this.correct++;
        this.counter++;
        this.randomise();
      } else {
        const toast = this.toastCtrl.create({
          message: 'That Was Not Correct',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();
        this.incorrect++;
        this.counter++;
        this.randomise();
      }
    }else{
      const alert = this.alertCtrl.create({
        title: 'Level 2',
        subTitle: 'Proceed to the next level...',
        buttons: [{
          text: 'Okay',
          handler: () => {
            // this.navCtrl.push(Trivia2Page, {round1score: this.correct});
          }
        }]
      });
    }
  }

  randomise() {
    this.random = Math.floor(Math.random() * 5);
    this.guessArra = guessArray[this.random];
  }
}
