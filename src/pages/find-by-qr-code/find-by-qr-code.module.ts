import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindByQrCodePage } from './find-by-qr-code';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { appconfig } from '../../providers/api-urls';
import { Angular2ServiceProvider } from "../../providers/angular2-service/angular2-service";
@NgModule({
  declarations: [
    FindByQrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(FindByQrCodePage),
    HttpClientModule,
    AngularFireModule.initializeApp(appconfig.firebase),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers : [
    BarcodeScanner,
    FindSellersProvider,
    Angular2ServiceProvider
  ]
})
export class FindByQrCodePageModule {}
