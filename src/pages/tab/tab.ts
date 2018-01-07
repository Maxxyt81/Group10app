import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { AboutusPage } from '../aboutus/aboutus';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  tabroot1:any;
  tabroot2:any;
  tabroot3:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabroot1= HomePage;
    this.tabroot2= MenuPage;
    this.tabroot3= AboutusPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
