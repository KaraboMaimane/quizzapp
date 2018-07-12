import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { SelectPage } from '../select/select';
import { LoadpPage } from '../loadp/loadp';

/**
 * Generated class for the ModePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mode',
  templateUrl: 'mode.html',
})
export class ModePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModePage');
  }

  practice(){
    this.navCtrl.push(SelectPage);
  }

  trivia(){
    this.navCtrl.push(LoadpPage);
    const alert = this.alertCtrl.create({
      title: 'Notice',
      subTitle: 'Please put on your earphones or turn your speaker up as some of the following stages, makes use of audio output',
      buttons: ['Okay']
    });
    alert.present();
  }

}
