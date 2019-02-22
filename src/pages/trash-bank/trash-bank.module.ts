import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrashBankPage } from './trash-bank';
import { TrashbankProvider } from '../../providers/trashbank/trashbank';
import { HttpClientModule } from '@angular/common/http';
import { AuthenProvider } from '../../providers/authen/authen'
@NgModule({
  declarations: [
    TrashBankPage,
  ],
  imports: [
    IonicPageModule.forChild(TrashBankPage),
    HttpClientModule
  ],
  providers: [
    TrashbankProvider, AuthenProvider
  ],
})
export class TrashBankPageModule {}
