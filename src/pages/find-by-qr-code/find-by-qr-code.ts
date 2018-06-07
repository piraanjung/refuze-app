import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
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
  seller: any={
    'name': 'พิพัฒน์พงษ์',
    'last_name' : 'ห้องแซง',
    'mobile' : '0986753456',
    'address' : '424/12',
    'DISTRICT_NAME' : 'โนนม่วง',
    'AMPHUR_NAME' : 'เมืองขอนแก่น',
    'PROVINCE_NAME' : 'ขอนแก่น',
    'zipcode' : 40000
  };
  has_user: boolean = false
  items: any={};
  FindItemsPage: string


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private barcodeScanner: BarcodeScanner, 
    private findSeller : FindSellersProvider, 
    private alertCtrl: AlertController,
    private app: App) {
      localStorage.removeItem('sellerProfile')
      this.FindItemsPage = 'find-items'
      this.Scanqrcode()
      // this.search_user('dd')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindByQrCodePage');
  }

  Scanqrcode() {
    this.option = {
      preferFrontCamera: false,
      prompt: "สแกน QR CODE"
    }
    // this.search_user('3459324345165')

    // this.barcodeScanner.scan(this.option).then((barcodeData) => {
    //   this.data = barcodeData.text
    this.data= '34593724345123'
      this.search_user(this.data)
    // }, (err) => {
    //   // An error occurred
    //   console.log(err)
    // });

  }

  search_user(sellercode) {
    this.findSeller.getSeller(sellercode).subscribe(res => {

    this.seller = res
    console.log(this.seller)
    // if(sellercode != '122222'){
      if (JSON.stringify(this.seller) == '{}') {
        this.presentAlert("ผลการค้นหา","ไม่พบข้อมูล");
        this.has_user = false
        this.Scanqrcode()
      } else {
        localStorage.setItem('sellerProfile', JSON.stringify( this.seller))
        this.has_user = true
      }
    }, (error: any) => {
      this.presentAlert("ผลการค้นหา","ไม่พบข้อมูล");
      this.has_user = false
    })
  }

  // search_user(sellercode) {
  //   // this.findSeller.getSeller(sellercode).subscribe(res => {

  //   // this.seller = res
  //   if(sellercode != '122222'){
  //     // if (JSON.stringify(this.seller) == '{}') {
  //       this.presentToast("ไม่พบข้อมูล")
  //       this.has_user = false
  //     } else {
  //       localStorage.setItem('sellerProfile', JSON.stringify( this.seller))
  //       this.has_user = true
  //     }
  //   // }, (error: any) => {
  //   //   this.presentToast("ไม่พบข้อมูล");
  //   // })
  // }

  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['ปิด']
    });
    alert.present();
  }

  gotoFindItems(seller){
    localStorage.setItem('sellerProfile', JSON.stringify(this.seller))
    this.app.getRootNav().setRoot('find-items');
  }


  goToHistorySeller(seller) {
    this.app.getRootNav().setRoot('PurchaseHistoryPage', {
      seller: seller
    })
  }

}
