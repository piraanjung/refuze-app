import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PurchaseItemsProvider } from "../../providers/purchase-items/purchase-items"
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers'

@IonicPage({
  name : 'sell-history'
})
@Component({
  selector: 'page-sell-history',
  templateUrl: 'sell-history.html',
})
export class SellHistoryPage {
  user : any
  sellHisLists : any
  data :any = {
    "items": [
      {
          "title": "Where to go",
          "icon": "icon-map-marker-radius",
          "items": [
              "Monuments",
              "Sightseeing",
              "Historical",
              "Sport"
          ]
      },
     
  ]
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private purchaseItem : PurchaseItemsProvider,
    private findSeller : FindSellersProvider,
    private menuCtrl: MenuController,

  ) {
    this.menuCtrl.enable(true, 'buylocalproducts-side-bar');
  }

  ionViewDidLoad() {
    // this.user = this.navParams.get('seller');
    this.user = JSON.parse(localStorage.getItem('sellerProfile'))
    // console.log(this.user);

    this.purchaseItem.getPurchaseTransactionsHistoryBySellerId(this.user.id)
    .subscribe((res) => {
      this.sellHisLists = res
      console.log(this.sellHisLists)
    })
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

}

