import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})

export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {}

  products : any;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {

    this.productService.getProducts().subscribe({

      next: resp => {
        this.products = resp;
      },

      error: err => {
        console.log(err);
      }
    });
  }

  handleDelete(product: any): void {

    this.productService.deleteProduct(product).subscribe({

      next: value => {
        this.getAllProducts();
      },

      error: err => {
        console.log(err);
      }
    });
  }
}

