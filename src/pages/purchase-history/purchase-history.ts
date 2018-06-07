import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseItemsProvider } from "../../providers/purchase-items/purchase-items"
/**
 * Generated class for the PurchaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-history',
  templateUrl: 'purchase-history.html',
})
export class PurchaseHistoryPage {

  user : any
  purchaseHisLists : any
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
      {
          "title": "Where to sleep",
          "icon": "icon-hotel",
          "items": [
              "Hotels",
              "Hostels",
              "Motels",
              "Rooms"
          ]
      },
      {
          "title": "Where to eat",
          "icon": "icon-silverware-variant",
          "items": [
              "Fast Food",
              "Restorants",
              "Pubs",
              "Hotels"
          ]
      },
      {
          "title": "Where to drink",
          "icon": "icon-martini",
          "items": [
              "Caffes",
              "Bars",
              "Pubs",
              "Clubs"
          ]
      },
      {
          "title": "Where to go",
          "icon": "icon-map-marker-radius",
          "items": [
              "Monuments",
              "Sightseeing",
              "Historical",
              "Sport"
          ]
      }
  ]
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private purchaseItem : PurchaseItemsProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseHistoryPage');
    this.user = this.navParams.get('seller');
    console.log(this.user.id)
    this.purchaseItem.getPurchaseTransactionsHistoryBySellerId(this.user.id)
    .subscribe((res) => {
      this.purchaseHisLists = res
      console.log(this.purchaseHisLists)
    })
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  goToMainMenu(){
    this.navCtrl.setRoot('find-seller-tabs')
  }

}
