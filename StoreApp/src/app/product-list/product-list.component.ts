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
    this.products = [{name: 'Phone XL', description:'Phone XL description'},
    {name: 'Phone Mini', description:'Phone Mini description'},
    {name: 'Phone Standard', description:''}];
  }

}
