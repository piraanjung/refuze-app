import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SearchSellHistoryPage } from './search-sell-history';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';


@NgModule({
  declarations: [
    SearchSellHistoryPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(SearchSellHistoryPage),
  ],
  providers: [FindSellersProvider]
})
export class SearchSellHistoryPageModule {}
