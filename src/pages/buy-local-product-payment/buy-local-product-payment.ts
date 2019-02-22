import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage({
  name : 'buy-local-product-payment'
})
@Component({
  selector: 'page-buy-local-product-payment',
  templateUrl: 'buy-local-product-payment.html',
})
export class BuyLocalProductPaymentPage {
  @Input() events: any;

  localBuyer : any;
  transferAmount:number =0.0

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public alertCtrl: AlertController) {
    this.localBuyer = this.navParams.get('localBuyer');

        console.log(this.localBuyer)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyLocalProductPaymentPage');
  }

  confirmPayment(){
    if(this.transferAmount <=0){
      let alert = this.alertCtrl.create({
        title: 'กรุณาใส่จำนวนเงินที่ต้องการโอน',
        // subTitle: '10% of battery remaining',
        buttons: ['ตกลง']
      });
      alert.present();
      this.transferAmount =0
    }else{
      let alert = this.alertCtrl.create({
        title: 'รหัส PIN',
        inputs: [
          {
            name: 'pincode',
          },
        ],
        buttons: [
          {
            text: 'ยืนยัน',
            handler: data => {
              // if (User.isValid(data.username, data.password)) {
              if(data.pincode=="1234"){
                //1. ทำการ update ข้อมูลของผู้ขาย เพิ่มจำนวนเงินที่โอนจากผู้ซื้อ
                //2. ทำการ update  ข้อมูลผู้ซื้อสินค้า ลดจำนวนเงิน
                //3. ทำการส่ง message ไปยังผู้ขายสินค้าว่าได้มีการโอนเงินเข้าบัญชีจากผู้ซื้อสินค้ามายังผู้ขายสินค้าแล้ว
                //4. ไปหน้าแสดงผลการซื้อสินค้าของผู้ซื้อสินค้า
                this.navCtrl.push('buy-local-product-result',{
                  'localProductSeller' : this.localBuyer,
                  'transferAmount' : this.transferAmount
      })
              } else {
                // invalid login
                return false;
              }
            }
          }
        ]
      });
      alert.present();
    }
    
  }

  onChange(item:any) {//ITEM [EVENT OR SELECTED ITEM]
    if(this.transferAmount>240){
        let alert = this.alertCtrl.create({
          title: 'ยอดเงินของคุณไม่พอสำหรับการโอน',
          // subTitle: '10% of battery remaining',
          buttons: ['ตกลง']
        });
        alert.present();
        this.transferAmount = 0
    }
    console.log(this.transferAmount);
  }

  backToScanQrCode(){
    this.navCtrl.push('main-menu-seller')
  }

}
