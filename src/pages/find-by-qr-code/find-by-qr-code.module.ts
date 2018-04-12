import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindByQrCodePage } from './find-by-qr-code';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { HttpClientModule } from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
@NgModule({
  declarations: [
    FindByQrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(FindByQrCodePage),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers : [
    BarcodeScanner,
    FindSellersProvider,
  ]
})
export class FindByQrCodePageModule {}
