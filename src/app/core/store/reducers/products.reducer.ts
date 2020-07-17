import { Product } from '../../models/products.model';
import { ProductsActions, ProductActionTypes } from '../actions/products.actions';

export interface ProductsState {
  loading: boolean;
  loaded: boolean;
  products: Product[];
}

export const productsInitialState: ProductsState = {
  loading: false,
  loaded: false,
  products: null,
};

export function ProductsReducer(state: ProductsState = productsInitialState, action: ProductsActions): ProductsState {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }

    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.products,
        loading: false,
        loaded: true,
      };
    }

    case ProductActionTypes.FETCH_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default: {
      return state;
    }
  }
}
