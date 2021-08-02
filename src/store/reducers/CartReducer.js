const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
            const { product, quantity } = action.payload;
            console.log('quantity',quantity);
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
      default:
        return state;
    }
}

// git remote add origin https://github.com/Samat5501/phone_accessories-store.git