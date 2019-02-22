import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { Buyer } from '../../models/buyer';
import { Observable } from 'rxjs/Observable'
@Injectable()
export class AuthenProvider {

  constructor(private http: HttpClient) { }

  resAuthen(params): any {
    return this.http.post<Buyer>(API_URL+'/api/authen', params);
  }

  AuthenByPasswordAndPhonNumber(params): Observable<any>{
    return this.http.post<any>(`${API_URL}/authen-by-password-and-phone`, params);
  }

  feed():Observable<any>{
    let url = 'http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods'
    return this.http.get<any>(url);
  }

}
