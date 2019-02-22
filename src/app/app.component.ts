import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { SIDE_MENU_SELLER_MAIN } from '../providers/_side_menu_seller_main';
import { TRASH_BANK_SIDE_MENU } from '../providers/_side_menu_trashbank';
import { BUY_LOCAL_PRODUCTS_SIDE_MENU } from '../providers/_side_menu_buylocalproducts';
import { SELL_TRASH_HISTORY_SIDE_MENU } from '../providers/_side_menu_sell_history';
import { ITEMSPRICE_SIDE_MENU } from '../providers/_side_menu_items_price';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'AuthenticationPage';
  @ViewChild(Nav) nav:Nav;
  showSplash  = true
  data :any={
    "backgroundImage": 'assets/images/background/31.jpg',
    "logo": 'assets/images/logo/login-3.png',
    "title": "REFUZE"
}

main_seller_sidebar = SIDE_MENU_SELLER_MAIN;
trashbank_sidebar = TRASH_BANK_SIDE_MENU;
buylocalproducts_sidebar = BUY_LOCAL_PRODUCTS_SIDE_MENU;
selltrashhistory_sidebar = SELL_TRASH_HISTORY_SIDE_MENU;
itemsprice_sidebar = ITEMSPRICE_SIDE_MENU;
items=  [
  {
    "headerImage": "assets/images/background/17.jpg",
    "title": "หน้าหลัก",
    "navCtrl": "main-menu-purchase-items",
    "icon" : "appstore"
  },
  {
    "headerImage": "assets/images/background/17.jpg",
    "title": "ค้นหาผู้ขายขยะ",
    "navCtrl": "sell-trash",
    "icon" : "contacts"
  },
  {
    "headerImage": "assets/images/background/17.jpg",
    "title": "ประวัติรับซื้อขยะ",
    "navCtrl": "sell-trash",
    "icon" : "contacts"
  },
  {
    "headerImage": "assets/images/background/17.jpg",
    "title": "ออกจากระบบ",
    "navCtrl": "AuthenticationPage",
    "icon" : "exit"
  }
]
constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
   private menu:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // timer(7000).subscribe(() =>this.showSplash = false)
    });
  }

  openPage(page){
    this.nav.setRoot(page.navCtrl)
    this.menu.toggle()
  }
}

