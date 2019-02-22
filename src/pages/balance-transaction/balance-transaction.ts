import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BalanceTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balance-transaction',
  templateUrl: 'balance-transaction.html',
})
export class BalanceTransactionPage {
  acc_saving: any=[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BalanceTransactionPage');
    this.acc_saving = JSON.parse(localStorage.getItem('acc_saving'));
    console.log(this.acc_saving)
  }

  goto_withdraw(){
    this.navCtrl.push('account-withdraw')
  }

}
