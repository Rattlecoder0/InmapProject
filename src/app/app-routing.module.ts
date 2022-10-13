import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { SelectedComponent } from './selected/selected.component';

const routes: Routes = [
  {path:'cat', component:CategoryComponent},
  {path:'prod', component:ProductsComponent},
  {path:'sorted/:name', component:SelectedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
