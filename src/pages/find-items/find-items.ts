import { Component } from '@angular/core';
import { IonicPage, ModalController, LoadingController, NavController } from 'ionic-angular';
import { ItemsProvider } from '../../providers/items/items';
import { Item } from '../../models/item';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { Sellers } from '../../models/sellers';
import { API_URL } from '../../providers/api-urls';

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
  data: any;
  _class:any;
  _seller:any = [
    'name',
    'lastname',
    'image',
  ];
  server_url:string;


  constructor(
    private modalCtrl: ModalController,
    private itemsProvider: ItemsProvider,
    private findSeller: FindSellersProvider,
    private loadingCtrl: LoadingController,
    private navCtrl : NavController
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
    this.items = JSON.parse(localStorage.getItem('purchaseItems')) || [];
    this.countItems = Object.keys(this.items).length
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {};
    this.server_url = API_URL;
    console.log(this.items);
    this._seller.name  = this.seller.name;
    this._seller.lastname = this.seller.lastname;
    this._seller.image = this.seller.image;


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
      console.log(this.items)
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
    console.log(item)
    let profileModal = this.modalCtrl.create('purchase-items-modal', { item: item });
    profileModal.onDidDismiss(data => {
      this.getFavorite()
      this.countItems = data['countItems']
    });

    profileModal.present();
  }

  _items(){
    for(let i =0; i < this.items.length; i++){
      this._class = i%2 == 0 ? "odd" : "even" 
    }
  }

  testdate(date){
    let curmonth = new Date().getMonth() < 10 ? "0"+new Date().getMonth() : new Date().getMonth()
    let curyear = new Date().getFullYear()+543
    let curhour = new Date().getHours();
    let curminute = new Date().getMinutes() < 10 ? "0"+new Date().getMinutes() : new Date().getMinutes();
    let cursecond = new Date().getSeconds()
    let cur_date = new Date().getDate()+"/"+curmonth+"/"+curyear+" "+curhour+":"+curminute+":"+cursecond;

    return date == cur_date ? true : false;
  }

  goTofindSellerTabs(){
    localStorage.removeItem('sellerProfile')
    this.navCtrl.push('find-seller-tabs');
  }

}
