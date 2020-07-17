import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FetchProducts } from 'src/app/core/store/actions/products.actions';
import { getProducts, getLoading } from 'src/app/core/store/selectors/products.selector';
import { Product } from 'src/app/core/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<Product[]> = this.store.pipe(
    select(getProducts),
  );
  public loading$: Observable<boolean> = this.store.pipe(
    select(getLoading)
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchProducts());
  }

}
