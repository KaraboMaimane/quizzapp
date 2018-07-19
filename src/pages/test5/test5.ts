import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { SelectPage } from '../select/select';
import incorrectArr from '../../assets/resources/incorrectarr';
import correctArr from '../../assets/resources/correctarr';
import counterArr from '../../assets/resources/counterArr';
import masalaArray from '../../assets/resources/masala';
import { ModePage } from '../mode/mode';
import scoreArray, { Score } from '../../assets/resources/score';
import { ResultsPage } from '../results/results';
/**
 * Generated class for the Test5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test5',
  templateUrl: 'test5.html',
})
export class Test5Page {
  random = Math.floor(Math.random() * 5);
  masalaArra = masalaArray[this.random];
  items;
  correct: number = 0;
  incorrect: number = 0;
  counter: number = 0;
  incorrectArr = incorrectArr;
  correctArr = correctArr;
  counterArr = counterArr;
  video;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ngOnInit(){
    this.video = this.masalaArra.video
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

    if (this.counterArr.length < masalaArray.length) {
      if (answer == this.masalaArra.answer) {
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

          this.navCtrl.push(Test5Page);
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

          this.navCtrl.push(Test5Page);
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
            if (answer == this.masalaArra.answer) {
              this.correct++;
              let scoreIns = new Score("Angizwa", this.correct, this.incorrect);
              scoreArray.push(scoreIns);
              console.log(scoreArray);
              this.correctArr.splice(0,this.correctArr.length);
              this.incorrectArr.splice(0,this.incorrectArr.length);
              this.counterArr.splice(0,this.counterArr.length);

              this.navCtrl.push(ResultsPage, {scores: scoreArray});
              //release your values here
            } else {
              this.incorrect++;
              let scoreIns = new Score("Bimba", this.correct, this.incorrect);
              scoreArray.push(scoreIns);
              console.log(scoreArray);
              this.correctArr.splice(0,this.correctArr.length);
              this.incorrectArr.splice(0,this.incorrectArr.length);
              this.counterArr.splice(0,this.counterArr.length);

              this.navCtrl.push(ResultsPage, {scores: scoreArray});
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
    this.masalaArra = masalaArray[this.random];
  }


}
