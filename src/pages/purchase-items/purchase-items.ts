import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { Buyer } from '../../models/buyer';
import { Item } from '../../models/item';
import { PurchaseItemsProvider } from '../../providers/purchase-items/purchase-items';
import { User } from '../../models/firebase.models';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { appconfig } from '../../providers/api-urls';
import { Observable } from "rxjs";
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private purchaseItemsProvider: PurchaseItemsProvider,
    private db: AngularFirestore,
    private angular2Provider: Angular2ServiceProvider
  ) {
    this.total = 0
    this.isHide = false
    this.isDisabled = true
    this.FindSellerPage = 'find-seller'
    this.MainMenuPage = 'main-menu-purchase-items'
    this.animateClass = { 'zoom-in': true };
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.buyer = JSON.parse(localStorage.getItem('buyerProfile')) || {}
    this.items = JSON.parse(localStorage.getItem('purchaseItems')) || []

    this.total = this.calTotal(this.items)
    this.DisabledPurchaseButton(this.total)

    if (Object.keys(this.seller).length !== 0) {
      this.id = this.id
      this.fullname = `${this.seller.name} ${this.seller.last_name}`
      this.mobile = `โทร. ${this.seller.mobile}`
      this.address = ` ${this.seller.address} ต. ${this.seller.DISTRICT_NAME} อ. ${this.seller.AMPHUR_NAME} จ. ${this.seller.PROVINCE_NAME} ${this.seller.zipcode}`
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
      account_saving_id: this.seller.account_saving_id,
      balance: this.total,
      items: this.items
    }

    this.purchaseItemsProvider.createPurchaseProfile(params)
      .subscribe((res) => {
        loading.dismiss();
        this.isHide = true
        // update status = 2
        let email = "note32@gmail.com";
        this.db.collection<User>(appconfig.users_endpoint, 
          ref =>{
            
            return ref.where("email", "==", email).where("status", "==", 1)
          }).valueChanges().subscribe(data =>{
            if(data.length === 0){
              // var currentUser = {
              //   name : this.seller.name,
              //   email: email,
              //   time: new Date().getTime(),
              //   status: 2
              // };
              console.log('has  1')
    
              
            }else{
              console.log('1')
                this.db.collection(appconfig.users_endpoint).doc(res.id).update({
                  status : '2'
                }).then(()=>{
                  console.log('status change to  be 2')
                }).catch(err=>{
                  console.log(err)
                })

              //console.log(res.id)
              //update  status ให้เป็รน1
              // this.db.collection(appconfig.users_endpoint).doc(data).update({foo: "bar"});
                 
            }
         })

      })
  }

  DisabledPurchaseButton(total) {
    if (total <= 0) this.isDisabled = false
  }
}
