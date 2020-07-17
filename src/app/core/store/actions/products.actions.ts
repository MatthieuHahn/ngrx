import { Action } from '@ngrx/store';

import { Product } from '../../models/products.model';
import { ErrorData } from '../../models/error-data.model';

export enum ProductActionTypes {
  FETCH_PRODUCTS = '[Products] Fetch products',
  FETCH_PRODUCTS_SUCCESS = '[Products] Fetch products success',
  FETCH_PRODUCTS_FAIL = '[Products] Fetch products fail',
}

export class FetchProducts implements Action {
  readonly type = ProductActionTypes.FETCH_PRODUCTS;
}

export class FetchProductsSuccess implements Action {
  readonly type = ProductActionTypes.FETCH_PRODUCTS_SUCCESS;

  constructor(public products: Product[]) { }
}

export class FetchProductsFail implements Action {
  readonly type = ProductActionTypes.FETCH_PRODUCTS_FAIL;

  constructor(public payload: ErrorData) { }
}

export type ProductsActions =
  | FetchProducts
  | FetchProductsSuccess
  | FetchProductsFail;
