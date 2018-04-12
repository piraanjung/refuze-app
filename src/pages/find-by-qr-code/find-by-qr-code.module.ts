import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindByQrCodePage } from './find-by-qr-code';

@NgModule({
  declarations: [
    FindByQrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(FindByQrCodePage),
  ],
})
export class FindByQrCodePageModule {}
