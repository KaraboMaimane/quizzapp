import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Test1Page } from '../test1/test1';

/**
 * Generated class for the LoadpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loadp',
  templateUrl: 'loadp.html',
})
export class LoadpPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    
  }

  ionViewDidLoad() {
    this.navCtrl.push(Test1Page);
  }

}
