import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../models/products.model';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private readonly _httpClient: HttpClient,) { }

  public fetchProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>('/assets/data/products.json')
  }
}
