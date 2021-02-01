import { Component, OnInit, OnDestroy } from '@angular/core';
//Extra imports.
import { Product } from '../product';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Object to hold received products from the API.
  products: Product[] = [];
  //Will be used to destroy the requests.
  destroy$: Subject<boolean> = new Subject<boolean>();
  //Page & limit.
  page = 1;
  limit = 20;
  maxPage = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  //When the component is getting destroyed, emit a value (true) which will be received by "takeUntil" and then stop
  //the subscription as RxJS completes all subscribed observables.
  //Basically, cancel any pending HTTP requests by unsubscribing from the returned observable in case the user decides
  //to quit or navigate away from the component before the HTTP response is received (then Angular will unsubscribe automatically).
  ngOnDestroy() {
    this.destroy$.next(true);
    //Unsubscribe from the subject.
    this.destroy$.unsubscribe();
  }

  getProducts(): void {
    this.products = [];
    this.dataService.getProducts().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
      let max = data.length;
      this.maxPage = Math.ceil((max/20));
      this.products = data.slice(this.limit * (this.page - 1), this.limit * this.page);
    });
  }

  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.dataService.deleteProduct(product).subscribe();
  }

  public firstPage() {
    this.page = 1;
    this.getProducts();
  }
  public previousPage() {
    this.page = this.page === 1 ? this.page : this.page-1;
    this.getProducts();
  }
  public nextPage() {
    this.page = this.page === this.maxPage ? this.page : this.page+1;
    this.getProducts();
  }
  public lastPage() {
    this.page = this.maxPage;
    this.getProducts();
  }
}