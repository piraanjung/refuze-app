import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Item, addNewItem, ItemPrice } from '../../models/item';
import { ItemsProvider } from '../../providers/items/items';

@IonicPage({
  name: 'purchase-items-modal'
})
@Component({
  selector: 'page-purchase-items-modal',
  templateUrl: 'purchase-items-modal.html',
})
export class PurchaseItemsModalPage {
  item: Item
  items: addNewItem[]
  item_price: ItemPrice
  id: number
  name: string
  price: number
  old_price: number
  amount: number
  unit_name: string
  balance: number
  _img: string
  data={
    price: 'ราคา',
    amount : 'จำนวน',
    register : 'บันทึกข้อมูล',
    logo : 'assets/images/logo/login-2.png'
  }
   

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private loadingCtrl: LoadingController,
    private itemsProvider: ItemsProvider
  ) {
    this.amount = 1
    this._img = './assets/images/background/7.jpg'
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item')
    this.id = this.item.id
    this.name = this.item.name
    this.unit_name = this.item.unit_name
    this.price = this.item.price
    this.old_price = this.item.price
    this.balance = (this.amount * this.price)
    let items = JSON.parse(localStorage.getItem('purchaseItems')) || []
    this.items = items
    this.item_price = {
      id: this.item.id,
      price: this.item.price
    }
  }

  dismiss() {
    this.viewCtrl.dismiss({ status: 'status', countItems: this.items.length })
  }

  addNewItem() {
    if (this.price != this.old_price) {
      let loading = this.loadingCtrl.create({
        content: 'กำลังดำเนินการ...',
        spinner: 'crescent',
      });
      loading.present();

      this.item_price.price = this.price
      this.itemsProvider.setItemPrice(this.item_price).subscribe(res => {
        this.pushNewItem()
        loading.dismiss();
      }, error => console.log(error))
    } else {
      this.pushNewItem()
    }
  }

  pushNewItem() {
    this.balance = (this.amount * this.price)
    let item = {
      name: this.name,
      unit_name: this.unit_name,
      item_id: this.id,
      price: this.price,
      amount: this.amount,
      balance: this.balance
    }

    this.items.push(item)
    localStorage.setItem('purchaseItems', JSON.stringify(this.items))
    console.log(this.items)
    this.viewCtrl.dismiss({ status: 'status', countItems: this.items.length })
  }

}
