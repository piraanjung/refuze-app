import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { ProfileSellerPage } from '../profile-seller/profile-seller';
import { SellHistoryPage } from '../sell-history/sell-history';
/**
 * Generated class for the SearchPurchaseHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : "search-sell-history"
})
@Component({
  selector: 'page-search-sell-history',
  templateUrl: 'search-sell-history.html',
})
export class SearchSellHistoryPage {
  data: any = {}
  sellers: Sellers[];
  // sellers = [];
  seller: Sellers
  id: number
  address: string
  mobile: string
  fullname: string
  image_url: string
  FindItemsPage: string
  animateItems = [];
  animateClass: any;
  constructor(    private navCtrl: NavController,
    private findSeller: FindSellersProvider,
    private loadingCtrl: LoadingController
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
      loading.dismiss();
      let i = 0
      let that = this
      let arr = []
      res.forEach(function (value) {
        setTimeout(function () {
          that.sellers.push(value)
      }, 200 * i++);
      }); 
    
    }, error=> {
      loading.dismiss();      
    })
  }

  goToProfileSeller(profile) {
    localStorage.setItem('sellerProfile', JSON.stringify(profile))
    this.navCtrl.push('ProfileSellerPage')
  }

  getItems(ev) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.sellers = this.sellers.filter((seller) => (seller.name.toLowerCase().indexOf(val.toLowerCase()) > -1))
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
      // this.address = `บ้านเลขที่ ${this.seller.address} ตำบล ${this.seller.district_name} อำเภอ ${this.seller.AMPHUR_NAME} จังหวัด ${this.seller.PROVINCE_NAME} ${this.seller.zipcode}`
    }
  }

  isGroupShown(group: any) {
    return group.show;
  }


  goToHistorySeller(seller) {
    this.navCtrl.push('PurchaseHistoryPage', {
      seller: seller
    })
  }

}
