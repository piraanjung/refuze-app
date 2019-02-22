import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ShoppingCartMenuPage } from '../shopping-cart-menu/shopping-cart-menu';

/**
 * Generated class for the ShoppingCartMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : "shopping-cart-main"
})
@Component({
  selector: 'page-shopping-cart-main',
  templateUrl: 'shopping-cart-main.html',
})
export class ShoppingCartMainPage {

  slides = [
    {
      title: "ยินดีต้อนรับสู่ <br>Refuze Shopping Online",
      description: "แหล่งรวมสินค้าราคาถูก  โปรโมชั่นโดนใจ <br>สิทธิพิเศษสำหรับสมาชิก Refuze เท่านั้น",
      image: "./assets/imgs/shopping-cart/shopping-cart_slide1.png",
    },
    {
      title: "แลกซื้อสินค้าด้วยเงินขายขยะ",
      description: "<b>ท่านสามารถนำเงินสะสมจากการขายขยะ<br>มาแลกซื้อสินค้าในราคาพิเศษ<br>เพื่อสมาชิกเท่านั้น</b> ",
      image: "./assets/imgs/shopping-cart/shopping-cart_slide2.png",
    },
    {
      title: "หรือ ใช้แต้มสะสมแลกสินค้า",
      description: "<b>ท่านสามารถนำแต้มสะสมมาแลกซื้อสินค้า<br>โดยไม่ต้องจ่ายเงิน</b> ",
      image: "./assets/imgs/shopping-cart/shopping-cart_slide4.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'ecommerce');
  }

  ionViewDidLoad() {
  }

  goToShoppingCart(){
    // this.navCtrl.push("shopping-cart");
    this.navCtrl.setRoot('shopping-cart-menu')
  }

  
}
