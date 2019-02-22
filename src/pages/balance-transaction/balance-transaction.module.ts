import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalanceTransactionPage } from './balance-transaction';

@NgModule({
  declarations: [
    BalanceTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(BalanceTransactionPage),
  ],
})
export class BalanceTransactionPageModule {}
