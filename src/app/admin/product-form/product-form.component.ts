import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router/';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line:curly
    if (this.id) this.productService.get(this.id).take(1).subscribe( p => {
      this.product = p;
    });
  }

  save(product) {
    // tslint:disable-next-line:curly
    if (this.id) this.productService.update(this.id, product);
    // tslint:disable-next-line:curly
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    // tslint:disable-next-line:curly
    if (!confirm('Are you sure you want to delete this product?')) return;

      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);

  }


  ngOnInit() {
  }

}
