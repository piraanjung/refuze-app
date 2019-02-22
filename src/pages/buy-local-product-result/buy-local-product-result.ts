import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyLocalProductResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : 'buy-local-product-result'
})
@Component({
  selector: 'page-buy-local-product-result',
  templateUrl: 'buy-local-product-result.html',
})
export class BuyLocalProductResultPage {
  localProductSeller :{} ={}
  transferAmount : number = 0.0
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.localProductSeller = this.navParams.get('localProductSeller');
    this.transferAmount = this.navParams.get('transferAmount');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyLocalProductResultPage');
  }

  backToScanQrCode(){
    this.navCtrl.push('buy-local-product')
  }

  gotoMainMenu(){
    this.navCtrl.push('main-menu-seller')
  }

}
