import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpclient: HttpClient) {}

  public getAllProductService() {
    return this.httpclient.get('http://localhost:8080/prod/');
  }
  public getProductService(id) {
    return this.httpclient.get('http://localhost:8080/prod/' + id);
  }
  public deleteProductService(id) {
    return this.httpclient.delete('http://localhost:8080/prod/' + id);
  }
  public createProductService(product: Product) {
    const headers = { 'content-type': 'application/json' };
    return this.httpclient.post(
      'http://localhost:8080/prod/',
      JSON.stringify(product),
      {
        headers: headers,
      }
    );
  }
  public updateProductService(id, product: Product) {
    const headers = { 'content-type': 'application/json' };
    return this.httpclient.put(
      'http://localhost:8080/prod/' + id,
      JSON.stringify(product),
      {
        headers: headers,
      }
    );
  }
}
