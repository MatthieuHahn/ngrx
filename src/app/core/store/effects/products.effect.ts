import { Injectable } from '@angular/core';

import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { FetchProducts, ProductActionTypes, FetchProductsSuccess, FetchProductsFail } from '../actions/products.actions';
import { ErrorData } from '../../models/error-data.model';
import { Product } from '../../models/products.model';
import { ErrorService } from '../../services/error.service';
import { ProductsService } from '../../services/products.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private readonly productsService: ProductsService,
    private readonly errorService: ErrorService,
  ) { }

  @Effect()
  public fetchProducts$ = this.actions$.pipe(
    ofType<FetchProducts>(ProductActionTypes.FETCH_PRODUCTS),
    switchMap(() => this.productsService.fetchProducts().pipe(
      map((products: Product[]) => new FetchProductsSuccess(products)),
      catchError((error: ErrorData) => of(new FetchProductsFail(error)))),
    ),
  );

  @Effect({ dispatch: false })
  public fetchProductsFail$ = this.actions$.pipe(
    ofType<FetchProductsFail>(ProductActionTypes.FETCH_PRODUCTS_FAIL),
    map((action: FetchProductsFail) => action.payload),
    tap((error: ErrorData) => this.errorService.displayError(error)),
  );
}
