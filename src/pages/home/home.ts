import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AdultPage } from '../adult/adult';
import { UnderAgePage} from '../under-age/under-age'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
    
   
  }
  adultPage(){
 this.navCtrl.push(AdultPage);
  }

  underagePage(){
    this.navCtrl.push(UnderAgePage)
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  
}
