import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detail_product } from "../store/action/action";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import '../style.css'

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);

  useEffect(() => {
    dispatch(detail_product(id));
  }, [product, id]);

  const [quantity, setQuantity] = useState(1);
  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col-6">
          <div className="detail__image">
            <img src={`/img/${product.image}`} />
          </div>
        </div>
        <div className="col-6">
          <div className="detail__name">{product.name}</div>
          <div className="detail__price">
            <div>
              <b>Price: </b>{" "}
              <span className="detail__actual-price">
                {currencyFormatter.format(product.price, {
                  code: "USD",
                })}
              </span>
            </div>
            <div>
              <b>discountPrice: </b>{" "}
              <span className="detail__discount-price">
                {currencyFormatter.format(product.discountPrice, {
                  code: "USD",
                })}
              </span>
            </div>
          </div>
          <div className="detail__info">
            <div className="detail__wrapper">
              <span
                onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : "1")}
                className="decrease"
              >
                <BsDash />
              </span>
              <span className="quantity">{quantity}</span>
              <span
                onClick={(q) =>  setQuantity(quantity + 1)}
                className="increase"
              >
                <BsPlus />
              </span>
              <button onClick={()=> dispatch({type: 'ADD_TO_CART', payload: {product, quantity}})} className="add-btn">add to cart</button>
            </div>
          </div>
          <div className="detail__text">
            <h3>Detail</h3>
            {product.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
