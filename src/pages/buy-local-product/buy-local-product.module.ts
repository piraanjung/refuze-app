import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyLocalProductPage } from './buy-local-product';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@NgModule({
  declarations: [
    BuyLocalProductPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyLocalProductPage),
    HttpClientModule
  ],
  providers:[
    FindSellersProvider,
    BarcodeScanner
  ]
})
export class BuyLocalProductPageModule {}
