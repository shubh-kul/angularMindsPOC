import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  public getAllCollectionsData(): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let tokenOptions: any = {
      'user-key' : '9f54e6db93c8987e6e270fe1d9a35fb2'
    };
    return this.http.get('https://developers.zomato.com/api/v2.1/collections?city_id=280', {
      headers: tokenOptions
   });
  }
}
