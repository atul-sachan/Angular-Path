import { createReducer, on } from "@ngrx/store";
import { Product } from '../product';
import * as AppState from "../../state/app.state";
import * as ProductActions from './product.actions';

export interface State extends AppState.State {
    products: ProductState
}

export interface ProductState {
    showProductCode: boolean ;
    currentProductId: number;
    currentProduct: Product;
    products: Product[];
    error: string;
}

const initialState : ProductState = {
    showProductCode: true,
    currentProductId: 0,
    currentProduct: null,
    products: [],
    error: ''
}

export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductActions.toggleProductCode, state => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    }),
    on(ProductActions.setCurrentProduct, (state, action): ProductState =>{
        return {
            ...state,
            currentProduct: action.product
        }
    }),
    on(ProductActions.clearCurrentProduct, (state): ProductState => {
      return {
        ...state,
        currentProduct: null
      };
    }),
    on(ProductActions.initializeCurrentProduct, (state): ProductState => {
      return {
        ...state,
        currentProduct: {
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0
        }
      };
    }),
    on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
      return {
        ...state,
        products: action.products,
        error: ''
      };
    }),
    on(ProductActions.loadProductsFailure, (state, action): ProductState => {
      return {
        ...state,
        products: [],
        error: action.error
      };
    })
);