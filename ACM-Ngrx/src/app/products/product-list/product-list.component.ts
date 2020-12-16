import { getError } from './../product-store/product.selectors';
import { State } from './../product-store/product.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import { Product } from '../product';
import * as ProductActions from '../product-store/product.actions';
import { getCurrentProduct, getShowProductCode, getProducts } from '../product-store/product.selectors';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';

  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    this.selectedProduct$ = this.store.pipe(select(getCurrentProduct));
    this.products$ = this.store.pipe(select(getProducts));
    this.displayCode$ = this.store.pipe(select(getShowProductCode));
    this.errorMessage$ = this.store.pipe(select(getError));
    this.store.dispatch(ProductActions.loadProducts());
  }

  ngOnDestroy(): void {
    
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode())
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({product}));
  }

}
