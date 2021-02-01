import { Component, Input, OnInit } from '@angular/core';
//Extra imports.
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  //Current product.
  @Input() product: Product = {
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    quantity: 0
  };

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit(): void {
  }

  add(): void {
    if(isNaN(this.product.price!) || isNaN(this.product.quantity!)){
      console.log(this.product.price + " is a: " + typeof this.product.price);
      return;
    }
    //Add.
    this.dataService.addProduct(this.product).subscribe();
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
