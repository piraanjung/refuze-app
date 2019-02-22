import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
// import { Storage } from '@ionic/storage';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';


@IonicPage({
  name : "buy-local-product"
})
@Component({
  selector: 'page-buy-local-product',
  templateUrl: 'buy-local-product.html',
})
export class BuyLocalProductPage {

  data = {}
  option: BarcodeScannerOptions;
  localBuyer:any;
  has_user :boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    public alertCtrl : AlertController,
    private findSeller: FindSellersProvider,
    private menuCtrl: MenuController,
  ) {  
    this.menuCtrl.enable(true, 'buylocalproducts-side-bar');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyLocalProductPage');
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
    // sellercode = '34593724345125'
    this.findSeller.getSeller(sellercode).subscribe(res => {

    this.localBuyer = res
    console.log(this.localBuyer)
    // if(sellercode != '122222'){
      if (JSON.stringify(this.localBuyer) == '{}') {
        this.presentAlert("ผลการค้นหา","ไม่พบข้อมูล");
        this.has_user = false
        this.Scanqrcode()
      } else {
        // localStorage.setItem('sellerProfile', JSON.stringify( this.seller))
        this.has_user = true
        this.navCtrl.push('buy-local-product-payment',{
          'localBuyer' : this.localBuyer
        })
      }
    }, (error: any) => {
      this.presentAlert("ผลการค้นหา","ไม่พบข้อมูล");
      this.has_user = false
    })
  }

  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['ปิด']
    });
    alert.present();
  }
}
