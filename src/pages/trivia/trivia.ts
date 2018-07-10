import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import triviaArray from '../../app/pages';
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
  incorrect: any;
  counter: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ngOnInit() {
  }

  compare(answer) {
    if(this.counter < 5){
      if (answer == this.triviaArra.answer) {
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
      })
    }
  }

  randomise() {
    this.random = Math.floor(Math.random() * 5);
    this.triviaArra = triviaArray[this.random];
  }

}
