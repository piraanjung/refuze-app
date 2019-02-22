import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemsPricePage } from './items-price';
import { ItemsProvider } from '../../providers/items/items';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ItemsPricePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemsPricePage),
    HttpClientModule
  ],
  providers: [
    ItemsProvider,
    FindSellersProvider
  ]
})
export class ItemsPricePageModule {}
