import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { User } from '../../models/firebase.models';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { appconfig } from '../../providers/api-urls';
import { Angular2ServiceProvider } from "../../providers/angular2-service/angular2-service";
import { Observable } from "rxjs";
import { map } from 'rxjs/operator/map';
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
export class FindByQrCodePage implements OnInit {
  user: Observable<User[]>;
  private userCollection: AngularFirestoreCollection<User>;
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
  email = "note32@gmail.com";


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private barcodeScanner: BarcodeScanner, 
    private findSeller : FindSellersProvider, 
    private alertCtrl: AlertController,
    private db: AngularFirestore,
    private angular2Provider: Angular2ServiceProvider,
    private app: App) {
      localStorage.removeItem('sellerProfile')
      this.FindItemsPage = 'find-items'
      this.Scanqrcode();
      
    }

  ngOnInit(){

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
      // this.data = barcodeData.text
      let _data = '1535688483059-3459324345189'.split("-");
      console.log(_data[0])

      this.search_user(this.data)
    }, (err) => {
      // An error occurred
      console.log(err)
    });

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
        //ถ้าทำการสแกน QR Code แล้วเจอ user 
        //1.ให้ทำการเก็บใน localStorage
        this.matchingStatus(this.seller);
        // localStorage.setItem('sellerProfile', JSON.stringify( this.seller))
        // this.has_user = true
       
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

  gotoFindItems(){
    localStorage.setItem('sellerProfile', JSON.stringify(this.seller))
    this.app.getRootNav().setRoot('find-items');
  }

  goToHistorySeller(seller) {
    this.app.getRootNav().setRoot('PurchaseHistoryPage', {
      seller: seller
    })
  }

  goToMainMenu(){
    this.app.getRootNav().setRoot('main-menu-purchase-items')
  }

  matchingStatus(seller){
    //ทำการ split ค่าจากการสแกน qrcode จาก user วันที่timpstamp-id card
    let data = '1535688483059-3459324345189'; 
    let _data = data.split("-");
    let id_card = _data[1]; 
    //ทำการค้นหา seller โดย id_card จาก db   
    this.findSeller.getSeller(id_card).subscribe(res => { console.log(res)
        if(JSON.stringify(res) === "{}"){
          let title ="ผลการค้นหา";
          let subtitle = "ไม่พบการ matching  กรุณาลองใหม่";
          this.presentAlert(title, subtitle);
          this.has_user = false
          this.Scanqrcode();
        }else{
          let payload={
            name : res.name+ " " + res.last_name,
            phone: res.mobile,
            email: res.email,
            matching_status : 1
          }
          //add payload ไปที่ firebase
          this.angular2Provider.addUser(data, res);

          this.seller = res
          localStorage.setItem('sellerProfile', JSON.stringify( this.seller))
          this.has_user = true
        }
    })
  }

}
