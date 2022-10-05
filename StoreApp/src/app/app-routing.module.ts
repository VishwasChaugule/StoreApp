import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'products', component: ProductListComponent},
  {path: 'checkout', loadComponent: () => import('./checkout.component').then(mod => mod.CheckoutComponent)},
  { path:'**', loadComponent: () => import('./page-not-found.component').then(mod => mod.PageNotFoundComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
