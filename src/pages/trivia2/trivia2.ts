import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import ubaniArray from '../../app/ubani';
import { Trivia3Page } from '../trivia3/trivia3';
import { NextQPage } from '../next-q/next-q';
/**
 * Generated class for the Trivia2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trivia2',
  templateUrl: 'trivia2.html',
})
export class Trivia2Page implements OnInit{
  random = Math.floor(Math.random() * 5);
  ubaniArra = ubaniArray[this.random];
  items;
  correct: number = 0;
  incorrect: any;
  counter: number = 0;
  audio;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.audio = this.ubaniArra.audio
  }


  compare(answer) {
    if (this.counter < 5) {
      if (answer == this.ubaniArra.answer) {
        
        this.correct++;
        this.counter++;
        this.randomise();
        this.navCtrl.pop();
        this.navCtrl.push(Trivia2Page);
        
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
        this.navCtrl.pop();
        this.navCtrl.push(Trivia2Page);
      }
    } else {
      const alert = this.alertCtrl.create({
        title: 'Level 3',
        subTitle: 'Proceed to the next level...',
        buttons: [{
          text: 'Okay',
          handler: () => {
            this.navCtrl.push(Trivia3Page);
          }
        }]
      })
    }
  }

  randomise() {
    this.random = Math.floor(Math.random() * 5);
    this.ubaniArra = ubaniArray[this.random];
  }
}
