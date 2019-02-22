import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
// import { HomePage } from '../home/home';
// import * as WC from 'woocommerce-api';

/**
 * Generated class for the ShoppingCartMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : 'shopping-cart-menu'
})
@Component({
  selector: 'page-shopping-cart-menu',
  templateUrl: 'shopping-cart-menu.html',
})
export class ShoppingCartMenuPage {

  Woocommerce: any;
  homePage : any;
  categories : any[];
  @ViewChild('content') chlidNavCtrl : NavController;
  products: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.homePage = 'shopping-cart';
    this.categories =[]

    // this.Woocommerce = WC({
    //   // url : "http://119.59.103.60/~web/wordpress/",

    //   url : "http://127.0.0.1/wordpress/",
    //  consumerKey : "ck_3530726d634b3a5710e968666df20098563fe199",
    //   consumerSecret : "cs_6413cbe754e6eab1c51514e7e247d4b4862a0c9a",
    // });
    this.Woocommerce.getAsync("products/categories").then((data) => {
      console.log(data.body)
      let temp : any[] = JSON.parse(data.body).product_categories

      for(let i=0; i < temp.length; i++){
        if(temp[i].count > 0){
          if(temp[i].parent == 0){
            if(temp[i].slug == "clothing"){
              temp[i].icon = 'shirt';
            }
            if(temp[i].slug == "music"){
              temp[i].icon = 'musical-notes';
            }
            if(temp[i].slug == "posters"){
              temp[i].icon = 'images';
            }
            if(temp[i].slug == "hoodies"){
              temp[i].icon = 'cart';
            }
            this.categories.push(temp[i]);
          }
        }
      }
      console.log(this.categories)
      this.products = JSON.parse(data.body).products
    }, (error) => {
      console.log('ERROR TAG');
      console.log(error);
    })
  }

  openCategoryPage(category){
    this.chlidNavCtrl.setRoot('shopping-cart-product-by-category', {
      'category' : category
    })
  }

  logOutShopingCart(){
    this.navCtrl.setRoot('main-menu-seller');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
