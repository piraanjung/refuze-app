import { Component } from '@angular/core';
import { IonicPage, LoadingController, AlertController, App } from 'ionic-angular';
import { AuthenProvider } from '../../providers/authen/authen';
import { Buyer } from '../../models/buyer';
import { NgForm } from '@angular/forms';
import { Sim } from '@ionic-native/sim';
@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  params: any
  BuyerProfile: Buyer;
  data: any = {
    logo: 'assets/images/logo/login.png',
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
    this.params = {
      username: '',
      passwords: '',
      user_cate_id:3
    }
  }

  ionViewDidEnter(){
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


    this.authen.resAuthen(this.params).subscribe(
      res => {
        if (res[1] === 200) { 
          console.log(res)
          this.BuyerProfile = res[0];
          localStorage.setItem('buyerProfile', JSON.stringify(this.BuyerProfile))
          this.app.getRootNav().setRoot('main-menu-purchase-items');
        } else {
          this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
          this.params.passwords = ''
          loader.dismiss();
        }
      },
      error => {
        this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
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
