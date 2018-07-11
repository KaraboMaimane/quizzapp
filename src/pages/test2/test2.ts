import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import ubaniArray from '../../assets/resources/ubani';
import counterArr from '../../assets/resources/counterArr';
import correctArr from '../../assets/resources/correctarr';
import incorrectArr from '../../assets/resources/incorrectarr';
import { SelectPage } from '../select/select';
import { Test3Page } from '../test3/test3';
/**
 * Generated class for the Test2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test2',
  templateUrl: 'test2.html',
})
export class Test2Page implements OnInit {

  random = Math.floor(Math.random() * 5);
  ubaniArra = ubaniArray[this.random];
  correct: number = 0;
  incorrect: number = 0;
  counter: number = 0;
  correctArr = correctArr;
  incorrectArr = incorrectArr;
  counterArr = counterArr;
  audio;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.audio = this.ubaniArra.audio
  }

  reducer = (initVal, currVal) => initVal + currVal;

  compare(answer) {
    this.counter++;
    this.counterArr.push(this.counter);

    //we convert our arrays into usable values
    if (counterArr.length == this.ubaniArra.length) {
      this.counter = counterArr.reduce(this.reducer);
      if (this.correctArr.length > 0) {
        this.correct = this.correctArr.reduce(this.reducer);
      }
      if (this.incorrectArr.length > 0) {
        this.incorrect = this.incorrectArr.reduce(this.reducer);
      }

    }

    if (this.counterArr.length < ubaniArray.length) {
      if (answer == this.ubaniArra.answer) {
        this.correct++;
        this.correctArr.push(this.correct);
        const toast = this.toastCtrl.create({
          message: 'That Was Correct',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();


        this.randomise();
        this.navCtrl.pop();
        this.navCtrl.push(Test2Page);
      } else {
        const toast = this.toastCtrl.create({
          message: 'That Was Not Correct',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();

        this.incorrect++;
        this.incorrectArr.push(this.incorrect);
        this.randomise();
        this.navCtrl.pop();
        this.navCtrl.push(Test2Page);
      }
    } else {
      const alert = this.alertCtrl.create({
        title: 'Level 3',
        subTitle: 'Proceed to the next level...',
        buttons: [{
          text: 'Okay',
          handler: () => {
            if (answer == this.ubaniArra.answer) {
              this.correct++;

              this.correctArr.splice(0,this.correctArr.length);
              this.incorrectArr.splice(0,this.incorrectArr.length);
              this.counterArr.splice(0,this.counterArr.length);
              
              console.log(this.correctArr, this.incorrectArr, this.counterArr);
              this.navCtrl.pop();
              this.navCtrl.push(Test3Page);
            } else {
              this.incorrect++;

              this.correctArr.splice(0,this.correctArr.length);
              this.incorrectArr.splice(0,this.incorrectArr.length);
              this.counterArr.splice(0,this.counterArr.length);

              this.navCtrl.pop();
              this.navCtrl.push(Test3Page);
            }
          }
        }]
      });
      alert.present();
    }
  }

  randomise() {
    this.random = Math.floor(Math.random() * 5);
    this.ubaniArra = ubaniArray[this.random];
  }
}
