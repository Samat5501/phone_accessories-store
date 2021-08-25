// import { data } from "../../data";

import { data } from "../../data";
import { PRODUCT } from "../action/action";

const initState = {
  products: data,
  product: {},
};
console.log('ProductReducerProduct',initState.products)
const ProductsReducer = (state = initState, action) => {
  ;
  switch (action.type) {
    case PRODUCT:
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};
export default ProductsReducer;