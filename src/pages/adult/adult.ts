import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';
import {GmusikPage } from '../gmusik/gmusik';

/**
 * Generated class for the AdultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adult',
  templateUrl: 'adult.html',
})
export class AdultPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  messagePage(){
    this.navCtrl.push(MessagePage);
  }
  gmusikPage(){
    this.navCtrl.push(GmusikPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdultPage');
  }

}
