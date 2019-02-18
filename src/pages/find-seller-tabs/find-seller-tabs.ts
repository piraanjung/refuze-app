import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the FindSellerTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : 'find-seller-tabs'
})
@Component({
  selector: 'page-find-seller-tabs',
  templateUrl: 'find-seller-tabs.html'
})
export class FindSellerTabsPage {

  findByNameRoot:any;
  findByQrCodeRoot:any;


  constructor(public navCtrl: NavController) {
    this.findByNameRoot = 'find-seller';
    this.findByQrCodeRoot = 'find-by-qr-code';
  }
  
}
