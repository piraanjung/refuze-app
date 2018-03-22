import { Component } from '@angular/core';
import { IonicPage, ModalController, LoadingController } from 'ionic-angular';
import { ItemsProvider } from '../../providers/items/items';
import { Item } from '../../models/item';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { Sellers } from '../../models/sellers';

@IonicPage({
  name: 'find-items'
})
@Component({
  selector: 'page-find-items',
  templateUrl: 'find-items.html',
})
export class FindItemsPage {
  items: Item[]
  countItems: number
  PurchaseItems: string
  seller: Sellers
  data: any

  constructor(
    private modalCtrl: ModalController,
    private itemsProvider: ItemsProvider,
    private findSeller: FindSellersProvider,
    private loadingCtrl: LoadingController
  ) {
    this.countItems = 0
    this.PurchaseItems = 'purchase-items'
    this.data = {
      "title": "ค้นหาชนิดขยะ",
      "description": "ทำการพิมพ์ชื่อขยะเพื่อทำการค้นหา",
      "shortDescription": "35:72",
      "iconLike": "icon-thumb-up",
      "iconFavorite": "icon-heart",
      "iconShare": "icon-share-variant",
      "iconPlay": "icon-play-circle-outline",
    }
  }

  ionViewWillEnter() {
    this.getFavorite()
    this.items = JSON.parse(localStorage.getItem('purchaseItems'))
    this.countItems = Object.keys(this.items).length
  }

  getFavorite() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังดำเนินการ...',
      spinner: 'crescent',
    });

    loading.present();
    this.itemsProvider.getFavorite().subscribe((res) => {
      loading.dismiss();
      this.items = res
    })
  }

  filterItems(ev) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.getItems(val)
    } else {
      this.getFavorite()
    }
  }

  getItems(val) {
    this.itemsProvider.getItems().subscribe((res) => {
      this.items = res.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }, (err) => console.log(err))
  }

  presentaddModalItem(item) {
    let profileModal = this.modalCtrl.create('purchase-items-modal', { item: item });
    profileModal.onDidDismiss(data => {
      this.countItems = data['countItems']
    });

    profileModal.present();
  }

}
