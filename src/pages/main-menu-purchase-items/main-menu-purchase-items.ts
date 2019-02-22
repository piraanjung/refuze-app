import { Component } from '@angular/core'
import { IonicPage, NavController } from 'ionic-angular'
import { MAIN_MENU_PURCHASE_ITEMS } from '../../providers/_main-menu-purchase-items'
import { API_URL } from '../../providers/api-urls';

@IonicPage({
  name: 'main-menu-purchase-items',
  segment: 'main-menu-purchase-items'
})
@Component({
  selector: 'page-main-menu-purchase-items',
  templateUrl: 'main-menu-purchase-items.html',
})
export class MainMenuPurchaseItemsPage {
  data: any
  user: any =[];
  image:string ='';
  name_lastname:string ='';
  buyer_id_card:string ='';
  constructor(
    private navCtrl: NavController) {
    localStorage.removeItem('sellerProfile')
    localStorage.removeItem('purchaseItems')
    this.data = MAIN_MENU_PURCHASE_ITEMS;
     this.user = JSON.parse(localStorage.getItem('buyerProfile'));
     
     this.image = API_URL+'/images/users/'+ this.user.image;
     this.name_lastname = this.user.name+ ' '+ this.user.lastname;
     this.buyer_id_card = this.user.id_card;
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation()
    }

    if (item != "#") {
      this.navCtrl.push(item)
    }
  }

}
