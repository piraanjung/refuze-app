import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import * as WC from 'woocommerce-api';


@IonicPage({
  name : 'shopping-cart-product-by-category'
})
@Component({
  selector: 'page-shopping-cart-product-by-category',
  templateUrl: 'shopping-cart-product-by-category.html',
})
export class ShoppingCartProductByCategoryPage {
  Woocommerce : any;
  products : any;
  page : number;
  category : any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = 1;
    this.category = this.navParams.get('category');
    // this.Woocommerce = WC({
    //   url : "http://119.59.103.60/~web/wordpress/",
    //   consumerKey : "ck_34dadcc1e5889f956eb53c58d25e1705859742af",
    //   consumerSecret : "cs_ac5ab442e936cfaf94f0b2746e8b5da59d337342"
    // });

    this.Woocommerce.getAsync("products?filter[category]=" + this.category.slug).then((data) => {
      console.log(JSON.parse(data.body))
      this.products = JSON.parse(data.body).products;
    },(err)=>{
      console.log(err)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategoryPage');
  }

  loadMoreProducts(event){
      this.page ++

      console.log("Getting page "+ this.page)

      this.Woocommerce.getAsync("products?filter[category]=" + this.category.slug +"&page="+ this.page).then((data) => {
        let temp = (JSON.parse(data.body).products);
        this.products = this.products.concat(JSON.parse(data.body).products);
        console.log(this.products)
        event.complete();

        if(temp.length < 10){
          event.enable(false)
        }
      },(err)=>{
        console.log(err)
      });
    }

    openProductPage(product){
      this.navCtrl.push('ProductDetailsPage', {
        'product' : product
      });
    }
  
}