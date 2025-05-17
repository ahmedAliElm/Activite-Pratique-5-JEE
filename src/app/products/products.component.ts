import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})

export class ProductsComponent implements OnInit {

  constructor() {}

  products : any;

  ngOnInit(): void {

    this.products = [

      { id: 1, name: "Product 1", price: 100, selected: false },
      { id: 2, name: "Product 2", price: 200, selected: true },
      { id: 3, name: "Product 3", price: 300, selected: false },
      { id: 4, name: "Product 4", price: 400, selected: true },
      { id: 5, name: "Product 5", price: 500, selected: false }
    ];
  }

  handleDelete(product: any): void {

    let v = confirm("Are you sure you want to delete this product?");

    if (!v) {
      return;
    }
    
    this.products = this.products.filter((p: { id: any; }) => p.id !== product.id);
  }
}

