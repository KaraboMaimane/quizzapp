import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import bimbaArray from '../../assets/resources/bimba';
import incorrectArr from '../../assets/resources/incorrectarr';
import correctArr from '../../assets/resources/correctarr';
import counterArr from '../../assets/resources/counterArr';
import { Test4Page } from '../test4/test4';
import { LoadpPage } from '../loadp/loadp';
import scoreArray, { Score } from '../../assets/resources/score';
/**
 * Generated class for the Test3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test3',
  templateUrl: 'test3.html',
})
export class Test3Page implements OnInit{

  random = Math.floor(Math.random() * 5);
  bimbaArra = bimbaArray[this.random];
  items;
  correct: number = 0;
  incorrect: number = 0;
  counter: number = 0;
  incorrectArr = incorrectArr;
  correctArr = correctArr;
  counterArr = counterArr;
  video;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private alertCtrl: AlertController, public loadingCtrl:LoadingController) {
  }

  ngOnInit(){
    this.video = this.bimbaArra.video
  }

  reducer = (initVal, CurrVal) => initVal + CurrVal;

  compare(answer) {
    this.counter++;
    this.counterArr.push(this.counter);

    if(this.counterArr.length == 5){
      this.counter = this.counterArr.reduce(this.reducer);
      if(this.incorrectArr.length > 0){
        this.incorrect = this.incorrectArr.reduce(this.reducer);
      }
      if(this.correctArr.length > 0){
        this.correct = this.correctArr.reduce(this.reducer);
      }
    }

    if (this.counterArr.length < bimbaArray.length) {
      if (answer == this.bimbaArra.answer) {
        const toast = this.toastCtrl.create({
          message: 'That Was Correct',
          duration: 1000,
          position: 'bottom'
        });
        toast.present();
        this.correct++;
        this.correctArr.push(this.correct);
        this.randomise();
        this.navCtrl.pop();
        const loading = this.loadingCtrl.create({
          content: 'Hold on...'
        });

        loading.present();

        setTimeout(() => {

          this.navCtrl.push(Test3Page);
          loading.dismiss();
        }, 1000);

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

        const loading = this.loadingCtrl.create({
          content: 'Hold on...'
        });

        loading.present();

        setTimeout(() => {

          this.navCtrl.push(Test3Page);
          loading.dismiss();
        }, 1000);
      }
    } else {
      const alert = this.alertCtrl.create({
        title: 'Quiz Completed',
        subTitle: 'Proceed to the next category',
        buttons: [{
          text: 'Okay',
          handler: () => {
            if (answer == this.bimbaArra.answer) {
              this.correct++;
              let scoreIns = new Score("Bheka, Ubani Lo?", this.correct, this.incorrect);
              scoreArray.push(scoreIns);
              this.correctArr.splice(0,this.correctArr.length);
              this.incorrectArr.splice(0,this.incorrectArr.length);
              this.counterArr.splice(0,this.counterArr.length);
              this.navCtrl.popTo(LoadpPage);
              this.navCtrl.push(Test4Page);
              //release your values here
            } else {
              this.incorrect++;
              let scoreIns = new Score("Bheka, Ubani Lo?", this.correct, this.incorrect);
              scoreArray.push(scoreIns);
              this.correctArr.splice(0,this.correctArr.length);
              this.incorrectArr.splice(0,this.incorrectArr.length);
              this.counterArr.splice(0,this.counterArr.length);
              this.navCtrl.popTo(LoadpPage);
              this.navCtrl.push(Test4Page);
              //release your values here
            }
          }
        }]
      });
      alert.present();
    }
  }

  randomise() {
    this.random = Math.floor(Math.random() * 5);
    this.bimbaArra = bimbaArray[this.random];
  }


}
