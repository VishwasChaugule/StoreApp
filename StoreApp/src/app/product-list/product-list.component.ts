import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] =[];

  constructor() { }

  ngOnInit(): void {
    this.products = [new Product('Phone XL', 'Phone XL description', 10),
    new Product('Phone Mini', 'Phone Mini description', 0),
    new Product('Phone Standard', 'Phone Standard description', 2)];
  }

  buy(product:Product) {
    console.log('Buy');
    console.log(product);
  }

  notify(product:Product) {
    console.log('Notify');
    console.log(product);
  }

}
