import { Injectable } from '@angular/core';
//Extra imports.
import { Product } from './product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER_URL = "api"
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private retryAttempts = 3;

  public first: string = "";
  public prev: string = "";
  public next: string = "";
  public last: string = "";

  constructor(private httpClient: HttpClient) { }

  //getProducts.
  public getProducts(): Observable<Product[]> {
    //Compose an API path for getting all products.
    const url = `${this.REST_API_SERVER_URL}/products`;
    //Returning all products.
    console.log("Fetched products...");
    return this.httpClient.get<Product[]>(url)
    .pipe(
      //Retrying 
      retry(this.retryAttempts),
      catchError(this.handleError<Product[]>('getProduct', []))
    );
  }

  //GET a product from the server by id.
  getProduct(id: number): Observable<Product>{
    const url = `${this.REST_API_SERVER_URL}/products/${id}`;
    return this.httpClient.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  //PUT: update a product on the server.
  updateProduct(product: Product): Observable<any> {
    const url = `${this.REST_API_SERVER_URL}/products`;
    return this.httpClient.put(url, product, this.httpOptions).pipe(
      catchError(this.handleError<any>(`updateProduct`))
    );
  }

  //DELETE: delete a product from the server.
  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.REST_API_SERVER_URL}/products/${id}`;
    return this.httpClient.delete<Product>(url, this.httpOptions).pipe(
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  //POST: add a new product to the server.
  addProduct(product: Product): Observable<Product> {
    const url = `${this.REST_API_SERVER_URL}/products`;
    return this.httpClient.post<Product>(url, product, this.httpOptions).pipe(
      catchError(this.handleError<Product>('addProduct'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //Logging message to console and alerting it.
      console.error(error);
      window.alert(error.body.error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
