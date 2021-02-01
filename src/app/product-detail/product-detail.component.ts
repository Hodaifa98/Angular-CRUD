import { Component, Input, OnInit } from '@angular/core';
//Extra imports.
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //Current product.
  @Input() product: Product = {
    id: -1
  };

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    let idParam = this.route.snapshot.paramMap.get("id");
    const id = idParam ? +idParam : null;
    if(id !== null){
      const currentProduct = this.dataService.getProduct(id);
      if(currentProduct)
        currentProduct.subscribe(product => this.product = product);
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.dataService.updateProduct(this.product)
      .subscribe(() =>
        this.goBack()
      );
  }
}
