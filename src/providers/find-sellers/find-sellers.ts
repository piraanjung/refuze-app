import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sellers } from '../../models/sellers';
import { API_URL } from '../api-urls';
import { Buyer } from '../../models/buyer';

@Injectable()
export class FindSellersProvider {

  API_HEADERS: any
  constructor(private http: HttpClient) {
    let buyerProfile: Buyer = JSON.parse(localStorage.getItem('buyerProfile'))
    this.API_HEADERS = {
      token: buyerProfile.remember_token
    }
  }

  getSellers(user_cate_id): any {
    // return this.http.get<Sellers[]>(`${API_URL}/sellers`, { headers: this.API_HEADERS })
    return this.http.get<Sellers[]>(`${API_URL}/api/users/${user_cate_id}`)
  }

  getSeller(id_card) :any{
    return this.http.get(`${API_URL}/users/find-by-id-card/`+ id_card)
  }

  setstatus():any{
    return this.http.get(`${API_URL}/users/testsetstatus`)
  }

}
