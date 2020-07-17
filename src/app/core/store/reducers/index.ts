import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import { ProductsReducer } from './products.reducer';
import { ProductsState } from './products.reducer';

export interface AppState {
  products: ProductsState;
}

export const appStoreReducer: any = {
  products: ProductsReducer,
};

export const getAppState = createFeatureSelector<AppState>('app');

export const reducers: ActionReducerMap<AppState> = {
  products: ProductsReducer,
};
