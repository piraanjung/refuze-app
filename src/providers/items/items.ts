import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { Observable } from 'rxjs';
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
    return this.http.get<Item[]>(`${API_URL}/api/items-favorite`)
  }

  getItems() {
    return this.http.get<Item[]>(`${API_URL}/api/items`)
  }

  setItemPrice(params: ItemPrice) {
    console.log(params);
    return this.http.post(`${API_URL}/api/items-update-price`, params)
  }
}
