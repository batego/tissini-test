import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { Sections } from '../interfaces/request.response';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlMultiVendor = 'stock/multivendor/';
  private categories = 'categories';
  private sections = 'sections';

  constructor(private http: HttpClient) {
    // console.log(environment.urlBase);
   }

  getMultivendor(id: any):Observable<any> {
    return this.http.get(`${environment.urlBase}${this.urlMultiVendor}${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${environment.urlBase}${this.categories}`);
  }

  getSections(): Observable<Sections[]> {
    return this.http.get<Sections[]>(`${environment.urlBase}${this.categories}/${this.sections}`);
  }

  getProducts(id: number): Observable<any> {
    return this.http.get(`${environment.urlBase}${this.categories}/${id}/products`);
  }
}
