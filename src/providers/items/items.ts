import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { Observable } from 'rxjs/Observable';
import { Item, ItemPrice } from '../../models/item';
import { Buyer } from '../../models/buyer';

@Injectable()
export class ItemsProvider {

  API_HEADERS: any
  constructor(private http: HttpClient) {
    let buyerProfile: Buyer = JSON.parse(localStorage.getItem('buyerProfile'))
    this.API_HEADERS = {
      token: buyerProfile.remember_token
    }
  }

  getFavorite() {
    return this.http.get<Item[]>(`${API_URL}/items-favorite`, { headers: this.API_HEADERS })
  }

  getItems() {
    return this.http.get<Item[]>(`${API_URL}/items`, { headers: this.API_HEADERS })
  }

  setItemPrice(params: ItemPrice) {
    return this.http.put(`${API_URL}/items-update-price`, params, { headers: this.API_HEADERS })
  }
}
