import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { CategoryService } from './../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[];
  categories$;
  category: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    categoryService: CategoryService) {

    productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })

      .subscribe(params => {
        this.category = params.get('category');

        // setting the filtered prodcuts array
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });

    this.categories$ = categoryService.getAll();


   }

  ngOnInit() {
  }

}
