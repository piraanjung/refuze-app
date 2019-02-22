import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingCartMenuPage } from './shopping-cart-menu';

@NgModule({
  declarations: [
    ShoppingCartMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingCartMenuPage),
  ],
})
export class ShoppingCartMenuPageModule {}
