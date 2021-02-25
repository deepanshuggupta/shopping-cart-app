import { data } from '../staticData'

const initialState = {
    products: [],
    selectedProductId: null,
}
export const ProductReducer = function (state = initialState, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: data
            }
        case "SET_PRODUCTS_ID":
            return {
                ...state,
                selectedProductId: action.id
            }

        default:
            return state;
    }
};