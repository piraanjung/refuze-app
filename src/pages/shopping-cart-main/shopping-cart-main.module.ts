import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingCartMainPage } from './shopping-cart-main';

@NgModule({
  declarations: [
    ShoppingCartMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingCartMainPage),
  ],
})
export class ShoppingCartMainPageModule {}
