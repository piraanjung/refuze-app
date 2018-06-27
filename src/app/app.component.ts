import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
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

