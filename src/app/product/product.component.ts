import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product = [];
  model = new Product();
  constructor(private productservice: ProductService) {}

  ngOnInit() {
    this.getAllProduct();
  }
  getAllProduct() {
    this.productservice.getAllProductService().subscribe((x: any[]) => {
      this.product = x;
    });
  }
  editProduct(id) {
    alert(id);
    this.productservice
      .getProductService(id)
      .subscribe((data: any) => (this.model = data));
  }
  deleteProduct(id: any) {
    alert(id);
    this.productservice.deleteProductService(id).subscribe((data) => {
      this.getAllProduct();
    });
  }
  addProduct() {
    if (!this.model.id) {
      this.productservice.createProductService(this.model).subscribe((data) => {
        this.getAllProduct();
        this.model = new Product();
      });
    } else {
      this.productservice
        .updateProductService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllProduct();
          this.model = new Product();
        });
    }
  }
}
