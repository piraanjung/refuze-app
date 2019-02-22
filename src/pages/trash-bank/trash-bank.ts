import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ToastController } from 'ionic-angular';
import { TrashbankProvider } from '../../providers/trashbank/trashbank'
import { BalanceTransactionPage } from '../../pages/balance-transaction/balance-transaction'
import { AuthenProvider } from '../../providers/authen/authen'
import { API_URL } from '../../providers/api-urls'

@IonicPage({
  name : 'trash-bank'
})
@Component({
  selector: 'page-trash-bank',
  templateUrl: 'trash-bank.html',
})
export class TrashBankPage {
  show_create_trans_bank_code: boolean;
  path:string = API_URL;
  private transaction_code:string;
  transact_code_err: string;
  balance: number = 0;
  user:any = []
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private menuCtrl: MenuController,
    private trashbankProvider: TrashbankProvider,
    private alertCtrl:AlertController,
    private authenProv :AuthenProvider,
    public toastCtrl: ToastController
    ) {
      this.menuCtrl.enable(true, 'trashbank-side-bar');
  }

  ionViewDidLoad() {
    this.user = JSON.parse(localStorage.getItem('sellerProfile'))
    
      this.user.image = API_URL+'/images/users/'+this.user.image;
      console.log(this.user);
      if(Object.keys(this.user).length > 0){
        this.checkTransactionCode(this.user.acc_id)
      }

    
  }

  checkTransactionCode(acc_id){
    this.trashbankProvider.getBalance(this.user.acc_id).subscribe(res=>{
      let acc_saving:any = {}
      acc_saving = res[0]
      console.log(acc_saving)
      if(Object.keys(res).length ==0){
        this.balance = 0;
      }else{
        this.balance = acc_saving.balance
      }
      
      if(!acc_saving.transaction_code){
        //แสดงหน้ากรอก Transaction bank code
        this.show_create_trans_bank_code = true
      }else{
        this.show_create_trans_bank_code = false
      }
     localStorage.setItem('acc_saving', JSON.stringify(acc_saving)); 
    })
  }


  balance_transction(){
    this.navCtrl.push(BalanceTransactionPage)
  }

  save_trans_code(){
    if(!this.transaction_code){
      const toast =  this.toastCtrl.create({
        message: 'กรุณาใส่รหัสตัวเลข 6 หลัก',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return false;
    }
    if(Object.keys(this.transaction_code).length <6  || Object.keys(this.transaction_code).length >6){
        this.transact_code_err = 'ตัวเลขต้องเท่ากับ 6'
    }else{
      let data ={
        'transact_code' : this.transaction_code,
        'acc_id' : this.user.acc_id
      }
      this.trashbankProvider.save_transaction_code(data).subscribe(res=>{
        console.log(res)
        if(res == true){
          this.transact_code_err =''
          let alert = this.alertCtrl.create({
            title: 'การบันทึกรหัสทำธุรกรรมธนาคารขยะ',
            message: 'ทำการบันทึกรหัสทำธุรกรรมธนาคารขยะ เรียบร้อย',
            buttons: [
              {
                text: 'ตกลง',
                handler: () => {
                  this.show_create_trans_bank_code = false;
                  this.trashbankProvider.getBalance(1).subscribe(res=>{
                    if(Object.keys(res).length ==0){
                      this.balance = 0;
                    }else{
                      // this.balance = 
                    }
                    localStorage.setItem('balance', JSON.stringify(this.balance)); 
                  })
                }
              }
            ]
          });
          alert.present();
        }
      })
    }
  }
}
