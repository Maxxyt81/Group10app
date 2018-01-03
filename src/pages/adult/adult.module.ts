import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdultPage } from './adult';

@NgModule({
  declarations: [
    AdultPage,
  ],
  imports: [
    IonicPageModule.forChild(AdultPage),
  ],
})
export class AdultPageModule {}
