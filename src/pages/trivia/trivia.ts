import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import triviaArray from '../../assets/resources/trivia';
import { SelectPage } from '../select/select';
/**
 * Generated class for the TriviaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trivia',
  templateUrl: 'trivia.html',
})
export class TriviaPage implements OnInit {
  random = Math.floor(Math.random() * 5);
  triviaArra = triviaArray[this.random];
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
              this.navCtrl.push(SelectPage);
            } else {
              this.incorrect++;
              this.navCtrl.push(SelectPage);
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
