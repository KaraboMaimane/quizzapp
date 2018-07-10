import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import bimbaArray from '../../app/bimba';
import { HomePage } from '../home/home';
/**
 * Generated class for the Trivia3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trivia3',
  templateUrl: 'trivia3.html',
})
export class Trivia3Page implements OnInit{

  random = Math.floor(Math.random() * 5);
  bimbaArra = bimbaArray[this.random];
  items;
  correct: number = 0;
  incorrect: any;
  counter: number = 0;
  video;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.video = this.bimbaArra.video
  }

  compare(answer) {
    if (this.counter < 5) {
      if (answer == this.bimbaArra.answer) {
        const toast = this.toastCtrl.create({
          message: 'That Was Correct',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();
        this.correct++;
        this.counter++;
        this.randomise();
        this.navCtrl.pop();
        this.navCtrl.push(Trivia3Page);
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
        this.navCtrl.push(Trivia3Page);
      }
    } else {
      const alert = this.alertCtrl.create({
        title: 'Level 2',
        subTitle: 'Proceed to the next level...',
        buttons: [{
          text: 'Okay',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        }]
      })
    }
  }

  randomise() {
    this.random = Math.floor(Math.random() * 5);
    this.bimbaArra = bimbaArray[this.random];
  }

}
