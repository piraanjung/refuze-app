import { Component } from '@angular/core';
import { IonicPage, Events,NavController, MenuController } from 'ionic-angular';
import { MAIN_MENU_SELLER } from '../../providers/main-menu-seller';
import { ToastController } from 'ionic-angular';
import { API_URL } from '../../providers/api-urls';

@IonicPage({
  name : 'seller-main'
})
@Component({
  selector: 'page-seller-main',
  templateUrl: 'seller-main.html',
})
export class SellerMainPage {
  pages: any = [];
  headerSideBar: string;
  sellerProfile: any = [];
  constructor( 
    private events: Events,
    private menuCtrl: MenuController,
    public toastCtrl: ToastController ,
    private navCtrl: NavController,

) {
    this.headerSideBar = 'ขายขยะ';
    this.events.publish('header-side-bar', this.headerSideBar);
    this.events.publish('pages', MAIN_MENU_SELLER);
    this.menuCtrl.enable(true, 'sellermain-side-bar');
    this.pages = MAIN_MENU_SELLER.filter(menu => menu.icon != 'exit');
  }

  ionViewDidLoad() {
    this.sellerProfile =  JSON.parse(localStorage.getItem('sellerProfile'));
    this.sellerProfile.image = API_URL+'/images/users/'+this.sellerProfile.image; 
    console.log(this.sellerProfile);

  }


  onEvent( item: any) {
   console.log(item)
    this.navCtrl.setRoot(item.navCtrl, {}, { animate: true, direction: 'forward' });
  }

}
