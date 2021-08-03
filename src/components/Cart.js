import React from "react";
import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus, BsReverseBackspaceReverse } from "react-icons/bs";

const Cart = () => {
  const { products } = useSelector((state) => state.CartReducer);
    
    const dispatch = useDispatch()

  return (
    <div className="cart">
      <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
              </div>
              {products.map((product) => (
                <div className="row vertical" key={product.id}>
                  <div className="col-2">
                    <div className="cart__img">
                      <img src={`/img/${product.image}`} alt={product.name} />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart__name">{product.name}</div>
                  </div>
                  <div className="col-2">
                    <div className="cart__price">
                      {currencyFormatter.format(product.discountPrice, {
                        code: "USD",
                      })}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="detail__info">
                      <div className="detail__wrapper">
                        <span className="decrease">
                          <BsDash />
                        </span>
                        <span className="quantity">{product.quantity}</span>
                        <span className="increase" onClick={() => dispatch({type: 'INC', payload: product.id})}>
                          <BsPlus />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart__total text">
                      {currencyFormatter.format(
                        product.discountPrice * product.quantity,
                        { code: "USD" }
                      )}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart__remove">
                      <BsReverseBackspaceReverse />
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-3">summary </div>
            </div>
          </>
        ) : (
          "Your Cart is empty"
        )}
      </div>
    </div>
  );
};

export default Cart;
