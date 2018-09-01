import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseItemsPage } from './purchase-items';
import { PurchaseItemsProvider } from '../../providers/purchase-items/purchase-items';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { appconfig } from '../../providers/api-urls';
import { Angular2ServiceProvider } from "../../providers/angular2-service/angular2-service";
@NgModule({
  declarations: [
    PurchaseItemsPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(PurchaseItemsPage),
    AngularFireModule.initializeApp(appconfig.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    PurchaseItemsProvider,
    Angular2ServiceProvider
  ]
})
export class PurchaseItemsPageModule { }
