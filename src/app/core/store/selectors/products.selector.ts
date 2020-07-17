import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from '../reducers/products.reducer';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getLoading = createSelector(
  getProductsState,
  (state: ProductsState) => state.loading
);

export const getProducts = createSelector(
  getProductsState,
  (state: ProductsState) => state.products
);
