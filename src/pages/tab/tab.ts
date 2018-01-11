import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { AboutusPage } from '../aboutus/aboutus';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  
  templateUrl: 'tab.html',
})
export class TabPage {

  tabroot1 = HomePage;
  tabroot2 = MenuPage;
  tabroot3 = AboutusPage;

  constructor() {
    
    
  }

 

}
