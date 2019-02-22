import { Component } from '@angular/core';
import { IonicPage, LoadingController, AlertController, App } from 'ionic-angular';
import { AuthenProvider } from '../../providers/authen/authen';
import { Sellers } from '../../models/sellers';
import { NgForm } from '@angular/forms';
import { Sim } from '@ionic-native/sim';
@IonicPage({})
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  params: any
  sellerProfile: Sellers;
  data: any = {
    logo: 'assets/imgs/f_logo.png',
    username: 'Username',
    password: 'Password',
    login: 'ล็อกอิน',
    register: 'ลงทะเบียน'
  }
  public simInfo: any;
  public cards: any;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private app: App,
    public sim: Sim,
    private authen: AuthenProvider) {
    localStorage.removeItem('buyerProfile')
    localStorage.removeItem('sellerProfile')

    this.params = {
      username: '',
      passwords: '',
      user_cate_id:1
    }
  }

  ionViewDidEnter(){
    // this.sim.getSimInfo
    // this.params.passwords = "1234";
    // this.params.mobile = '12345676';
    // this.params.username ='pochai1'
    // this.authen.AuthenByPasswordAndPhonNumber(this.params).subscribe(
    //   // this.authen.resAuthen(this.params).subscribe(
    //     res => {
    //       // if (res.logged === true) {
    //       if (res.status === 1) { 
    //         console.log(res)
    //         this.presentAlert('', 'พบ');

    //         this.BuyerProfile = res
    //         localStorage.setItem('sellerProfile', JSON.stringify(this.BuyerProfile))
    //         this.app.getRootNav().setRoot('main-menu-purchase-items');
    //       } else {
    //         this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
    //         this.params.passwords = ''
    //         // loader.dismiss();
    //       }
    //     },
    //     error => {
    //       this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
    //       // loader.dismiss();
    //     }
    //   );
  }

  async getSimData() {
    try {
      let simPermission = await this.sim.requestReadPermission();
      if (simPermission == "OK") {
        let simData = await this.sim.getSimInfo();
        this.simInfo = simData;
        this.cards = simData.cards;
        this.presentAlert(JSON.stringify(this.simInfo), this.cards)
        console.log(simData);
      }
    } catch (error) {
      console.log(error);
      this.presentAlert(JSON.stringify(error), this.cards)
    }
  }

  onSubmit(myform: NgForm) {
    let loader = this.loadingCtrl.create({
      content: 'กำลังดำเนินการ...',
      spinner: 'crescent',
      dismissOnPageChange: true,
    });

    // loader.present();
    // this.sim.getSimInfo().then(
    //   (info)=>{
    //     this.params.mobile = info.phonenumber
    //     this.presentAlert(this.params.mobile, this.params.mobile)
    //   }
    // )
    // this.params.passwords = "1234";
    // this.params.mobile = "";

    
   

    // this.authen.AuthenByPasswordAndPhonNumber(this.params).subscribe(
    this.authen.resAuthen(this.params).subscribe(
      res => {
        console.log(res)
        // if (res.logged === true) {
        if (res[1] == 200) { 
          this.sellerProfile = res[0];
          localStorage.setItem('sellerProfile', JSON.stringify(this.sellerProfile))
          this.app.getRootNav().setRoot('seller-main');
        } else {
          this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
          this.params.passwords = ''
          loader.dismiss();
        }
      },
      error => {
        this.presentAlert('', JSON.stringify(error));
        loader.dismiss();
      }
    );
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
