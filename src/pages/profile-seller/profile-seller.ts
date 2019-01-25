import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';

@IonicPage()
@Component({
  selector: 'page-profile-seller',
  templateUrl: 'profile-seller.html',
})
export class ProfileSellerPage {
  seller: Sellers
  id: number
  address: string
  mobile: string
  fullname: string
  image_url: string
  FindItemsPage: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.FindItemsPage = 'find-items'
  }

  ionViewDidLoad() {
    localStorage.removeItem('purchaseItems')
    this.seller = JSON.parse(localStorage.getItem('sellerProfile'))
    console.log(this.seller)
    if (Object.keys(this.seller).length !== 0) {
      this.id = this.id
      this.fullname = `${this.seller.name} ${this.seller.lastname}`
      this.mobile = `เบอร์ติดต่อ ${this.seller.mobile}`
      this.address = `บ้านเลขที่ ${this.seller.address} ตำบล ${this.seller.tambon_name} อำเภอ ${this.seller.amphur_name} จังหวัด ${this.seller.province_name} ${this.seller.zipcode}`
    }
  }
}
