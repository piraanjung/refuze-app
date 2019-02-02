import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, App, AlertController } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { ProfileSellerPage } from '../profile-seller/profile-seller';
import { PurchaseHistoryPage } from '../purchase-history/purchase-history';
@IonicPage({
  name: 'find-seller'
})
@Component({
  selector: 'page-find-seller',
  templateUrl: 'find-seller.html',
})
export class FindSellerPage {
  data: any = {}
  sellers: Sellers[];
  // sellers = {};
  seller: Sellers;
  id: number;
  address: string;
  mobile: string;
  fullname: string;
  image_url: string;
  FindItemsPage: string
  animateItems = [];
  animateClass: any;

  constructor(
    private navCtrl: NavController,
    private findSeller: FindSellersProvider,
    private loadingCtrl: LoadingController,
    private app: App,
    private alert:AlertController
  ) {
    localStorage.removeItem('purchaseItems')
    localStorage.removeItem('sellerProfile')
    this.FindItemsPage = 'find-items'
    this.animateClass = { 'zoom-in': true };
    this.data.iconPlay = ''
    this.data.title = ''
    this.data.description = ''
    this.sellers = []
  }

  ionViewDidLoad() {
    this.getSellers()
    // this.data = this.findSeller.getDataForLayout1()
  }

  getSellers() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังดำเนินการ...',
      spinner: 'crescent',
    });

    loading.present();

    this.findSeller.getSellers().subscribe((res) => {
      this.sellers = res
      loading.dismiss();
      // let i = 1
      // let that = this
      // let arr = []
      // res.forEach(function (value) {
      //   setTimeout(function () {
      //     that.sellers.push(value)
      // }, 200 * i++);
      // }); 
    console.log(this.sellers)
    }, error=> {
      loading.dismiss();      
    })
  }

  gotoFindItems(member){
    console.log(member)
    localStorage.setItem('sellerInfo', JSON.stringify(member))
    this.app.getRootNav().setRoot('find-items');
  }

  getItems(ev) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      if(val.match('^[0-9]*$') != null){
        console.log(this.sellers)
        //ทำการ search โดย ใช้หมายเลขโทรศัพท์
        this.sellers = this.sellers.filter((seller) => (seller.phone.indexOf(val)> -1))
      }else{
        //ทำการค้นหาโยชื่อ
        this.sellers = this.sellers.filter((seller) => (seller.name.toLowerCase().indexOf(val.toLowerCase()) > -1))
      }
    } else {
      this.getSellers()
    }
  }

  toggleGroup(group: any, profile) {
    group.show = !group.show;
    localStorage.setItem('sellerProfile', JSON.stringify(profile))
    this.seller = profile

    if (Object.keys(this.seller).length !== 0) {
      this.id = this.id
      this.fullname = `${this.seller.name} ${this.seller.lastname}`
      this.mobile = `เบอร์ติดต่อ ${this.seller.mobile}`
      this.address = `บ้านเลขที่ ${this.seller.address} ตำบล ${this.seller.tambon_name} อำเภอ ${this.seller.amphur_name} จังหวัด ${this.seller.province_name} ${this.seller.zipcode}`
    }
  }

  isGroupShown(group: any) {
    // console.log(group)
    return group.show;
  }


  goToHistorySeller(seller) {
    this.app.getRootNav().setRoot('PurchaseHistoryPage', {
      seller: seller
    })
  }

  goToMainMenu(){
    this.app.getRootNav().setRoot('main-menu-purchase-items')
  }

}
