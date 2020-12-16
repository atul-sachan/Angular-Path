import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";

const getProductFeatureState =createFeatureSelector<ProductState>('products');
export const getShowProductCode = createSelector(
    getProductFeatureState,
    state=> state.showProductCode
)

export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
)

export const getCurrentProductById = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId) => state.products.find(p=> p.id === currentProductId)
)

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
)

export const getProducts = createSelector(
    getProductFeatureState,
    state=> state.products
)

export const getError = createSelector(
    getProductFeatureState,
    state => state.error
);