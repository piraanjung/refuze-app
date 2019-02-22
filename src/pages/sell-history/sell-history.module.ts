import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SellHistoryPage } from './sell-history';
import { PurchaseItemsProvider } from "../../providers/purchase-items/purchase-items"
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers'

@NgModule({
  declarations: [
    SellHistoryPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(SellHistoryPage),
  ],
  providers:[
    PurchaseItemsProvider,
    FindSellersProvider
  ]
})
export class SellHistoryPageModule {}
