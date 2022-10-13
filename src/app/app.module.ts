import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectedComponent } from './selected/selected.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../app/material-module";
import { ActivatedRoute } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    NavbarComponent,
    SelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
