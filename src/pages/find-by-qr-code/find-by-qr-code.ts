import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
 /**
 * Generated class for the FindByQrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : 'find-by-qr-code'
})
@Component({
  selector: 'page-find-by-qr-code',
  templateUrl: 'find-by-qr-code.html',
})
export class FindByQrCodePage {
  data = {}
  option: BarcodeScannerOptions;
  seller: any={};
  has_user: boolean = false
  items: any={};
  FindItemsPage: string


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private barcodeScanner: BarcodeScanner, private findSeller : FindSellersProvider, 
    private toastCtrl: ToastController) {
      localStorage.removeItem('sellerProfile')
      this.FindItemsPage = 'find-items'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindByQrCodePage');
  }

  Scanqrcode() {
    this.option = {
      preferFrontCamera: false,
      prompt: "สแกน QR CODE"
    }
    this.barcodeScanner.scan(this.option).then((barcodeData) => {
      this.data = barcodeData.text
      this.search_user(this.data)
    }, (err) => {
      // An error occurred
      console.log(err)
    });

  }

  search_user(sellercode) {
    // this.findSeller.getSeller(sellercode).subscribe(res => {

    // this.seller = res
    if(sellercode != '122222'){
      // if (JSON.stringify(this.seller) == '{}') {
        this.presentToast("ไม่พบข้อมูล")
        this.has_user = false
      } else {
        localStorage.setItem('sellerProfile', JSON.stringify( this.seller))
        this.has_user = true
      }
    // }, (error: any) => {
    //   this.presentToast("ไม่พบข้อมูล");
    // })
  }

  presentToast(txt) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
