import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the FindSellerTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-seller-tabs',
  templateUrl: 'find-seller-tabs.html'
})
export class FindSellerTabsPage {

  findByNameRoot = 'find-seller'
  findByQrCodeRoot = 'find-by-qrcode'


  constructor(public navCtrl: NavController) {}

}
