import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemsProvider } from '../../providers/items/items';
import { Item } from '../../models/item';
import { PurchaseItemsModal } from '../purchase-items/purchase-item-modal';

@IonicPage({
  name: 'find-items'
})
@Component({
  selector: 'page-find-items',
  templateUrl: 'find-items.html',
})
export class FindItemsPage {
  items: Item[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private itemsProvider: ItemsProvider) { }

  ionViewDidLoad() {
    this.getFavorite()
  }

  getFavorite() {
    this.itemsProvider.getFavorite().subscribe((res) => this.items = res)
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

}
