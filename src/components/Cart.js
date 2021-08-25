import React from "react";
import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus, BsReverseBackspaceReverse } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.CartReducer
  );

  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="container">
        {products.length > 0 ? (
          <>
        <h3>Your Cart</h3>
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
                    <div className="detail__info cart__inDec">
                      <div className="detail__wrapper">
                        <span
                          className="decrease"
                          onClick={() =>
                            dispatch({ type: "DEC", payload: product.id })
                          }
                        >
                          <BsDash />
                        </span>
                        <span className="quantity">{product.quantity}</span>
                        <span
                          className="increase"
                          onClick={() =>
                            dispatch({ type: "INC", payload: product.id })
                          }
                        >
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
                    <div
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: product.id })
                      }
                      className="cart__remove"
                    >
                      <BsReverseBackspaceReverse />
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-3 summary-col">
                <div className="summary">
                  <div className="summary__heading">summary</div>
                  <div className="summary__details">
                    <div className="row mb-10">
                      <div className="col-6">Total Items:</div>
                      <div className="col-6">{totalQuantities}</div>
                      <div className="row mb-10">
                        <div className="col-6">Total Price</div>
                        <div className="col-6">
                          {currencyFormatter.format(totalPrice, {
                            code: "USD",
                          })}
                        </div>
                      </div>
                      <button type='button' className='checkout'>Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div >
            <h1 className='hel'>Your Cart is empty</h1>
            <Link to='/' className='back_home'><span>back to shop</span> </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
