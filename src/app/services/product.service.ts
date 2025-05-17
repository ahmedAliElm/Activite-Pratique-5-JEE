import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get("http://localhost/8083/products");
  }

  deleteProduct(product: any) {
    return this.http.delete("http://localhost/8083/products/" + product.id);
  }
}

