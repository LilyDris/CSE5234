import { Injectable } from '@angular/core';
import { Product } from '../products';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductCrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:8081';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  GetProducts() {
    return this.httpClient.get<Product[]>(`${this.REST_API}/products`);
  }

  GetProduct(id: Number) {
    return this.httpClient.get<Product>(`${this.REST_API}/product/${id}`);
  }
}
