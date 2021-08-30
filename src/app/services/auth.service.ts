import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userModel } from '../models/customer.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://v3.tissini.app/api/v3/login/client';
  

  constructor(private http: HttpClient) { }

  login(user: userModel): Observable<any> {

    // console.log(`Data: ${JSON.stringify(user)}`);
    return this.http.post(this.url, user).pipe(map((data: any) => {
      // console.log(data.customer);
      this.guardarToken('emprendedora', JSON.stringify(data.customer));
      this.guardarToken('categories', JSON.stringify(data.categories));
      // return data;
    }));    
  }

  logOut(key: string) {
    localStorage.removeItem(key);
  }

  private guardarToken(key: string, idToken: any) {
    // this.userToken = idToken;
    localStorage.setItem(key, idToken);

    // const hoy = new Date();
    // localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken(key: string): any {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  }

  estaAutenticado() {
    const id = JSON.parse(this.leerToken('emprendedora'));
    // console.log(id.id);
    if (id) {
      return true
    }
    else {
      return false
    }
  }
}
