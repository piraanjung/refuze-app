import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../api-urls';
import { Observable } from 'rxjs/Observable'

/*
  Generated class for the TrashbankProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrashbankProvider {
  constructor(public http: HttpClient) {
    //console.log('Hello TrashbankProvider Provider');
  }
  save_transaction_code(data){
    console.log(data)
    return this.http.post(API_URL+'/api/save_transaction_code', data);
  }

  checkTransBankCode(acc_id){
    return this.http.get(API_URL+'/api/check_trans_bank_code/'+acc_id);
  }

  getBalance(acc_id){
    return this.http.get(API_URL+'/api/getbalance/'+acc_id);
  }

}
