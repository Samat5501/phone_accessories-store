const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}

export const CartReducer = (state = initialState, action) => {
  let product;
  let index;
    switch (action.type) {
      case "ADD_TO_CART":
        const { product, quantity } = action.payload;
        const check = state.products.find((pr) => pr.id === product.id);
        if (check) {
          return state;
        } else {
          const Tprice = state.totalPrice + product.discountPrice * quantity;
          const Tquantities = state.totalQuantities + quantity;
          product.quantity = quantity;
          return {
            ...state,
            products: [...state.products, product],
            totalPrice: Tprice,
            totalQuantities: Tquantities,
          };
        }
        case 'INC': 
      default:
        return state;
    }
}
