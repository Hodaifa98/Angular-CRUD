import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Extra imports.
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductAddComponent } from "./product-add/product-add.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: 'products/add', component: ProductAddComponent },
  { path: 'products/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
