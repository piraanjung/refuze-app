import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { Buyer } from '../../models/buyer';
import { Item } from '../../models/item';
import { PurchaseItemsProvider } from '../../providers/purchase-items/purchase-items';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { API_URL } from '../../providers/api-urls';
import { Observable, concat } from "rxjs";
import { Angular2ServiceProvider } from "../../providers/angular2-service/angular2-service";

@IonicPage({
  name: 'purchase-items',
  segment: 'purchase-items'
})
@Component({
  selector: 'page-purchase-items',
  templateUrl: 'purchase-items.html',
})
export class PurchaseItemsPage {

  seller: Sellers
  buyer: Buyer
  items: Item[]
  id: number
  address: string
  mobile: string
  fullname: string
  image_url: string
  total: number
  isHide: boolean
  isDisabled: boolean
  FindSellerPage: string
  MainMenuPage: string
  animateItems = [];
  animateClass: any;
  url_server: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private purchaseItemsProvider: PurchaseItemsProvider,
    private db: AngularFirestore,
    private angular2Provider: Angular2ServiceProvider,
    private alertCtrl: AlertController,
    private app: App,
  ) {
    this.total = 0
    this.isHide = false
    this.isDisabled = true
    this.FindSellerPage = 'find-seller'
    this.MainMenuPage = 'main-menu-purchase-items'
    this.animateClass = { 'zoom-in': true };
    this.url_server = API_URL;
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.buyer = JSON.parse(localStorage.getItem('buyerProfile')) || {}
    this.items = JSON.parse(localStorage.getItem('purchaseItems')) || []
    this.total = this.calTotal(this.items)
    this.DisabledPurchaseButton(this.total)
    if (Object.keys(this.seller).length !== 0) {
      this.id = this.id;
      this.fullname = `${this.seller.name} ${this.seller.lastname}`;

      this.mobile = `โทร. ${this.seller.phone}`;
      this.image_url = this.seller.image;
      this.address = ` ${this.seller.address} ต. ${this.seller.tambon_name} อ. ${this.seller.amphur_name} จ. ${this.seller.province_name}`
       console.log(this.items)
    }
  }

  removeItem(index) {
    this.items.splice(index, 1)
    this.total = this.calTotal(this.items)
    this.DisabledPurchaseButton(this.total)
    localStorage.setItem('purchaseItems', JSON.stringify(this.items))
  }

  calTotal(items) {
    return this.items.reduce((pre, cur) => pre += cur.balance, 0);
  }

  createPurchaseProfile() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังดำเนินการ...',
      spinner: 'crescent',
    });

    loading.present();

    let params = {
      buyer_id: this.buyer.id,
      seller_id: this.seller.id,
      account_saving_id: this.seller.acc_id,
      balance: this.total,
      items: this.items
    }
   console.log(params);
    this.purchaseItemsProvider.createPurchaseProfile(params)
      .subscribe((res) => {
        //update  firebase->matching_status = 3 (บันทึกข้อมูลแล้ว)
      //   this.db.collection(appconfig.users_endpoint).doc(this.seller.doc_id).update({
      //     matching_status: 3
      //   });

      loading.dismiss();
      this.isHide = true 
    })
  }


  DisabledPurchaseButton(total) {
    if (total <= 0) this.isDisabled = false
  }

  cancelPurchaseProfile(){
    console.log(localStorage.getItem('purchaseItems'));
    const confirm = this.alertCtrl.create({
      title: 'คุณต้องการลบข้อมูลทั้งหมด?',
      message: '',
      buttons: [
        {
          text: 'ไม่ลบ',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ลบ',
          handler: () => {
            this.items = [];
            localStorage.setItem('purchaseItems', JSON.stringify(this.items));
            this.app.getRootNav().setRoot('find-items');
          }
        }
      ]
    });
    confirm.present();
  }
}
