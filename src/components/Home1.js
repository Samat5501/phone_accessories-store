import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'



const Home1 = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  
    return (
      <div>
        <Header />
        <div className="container mtb-30">
          <div className="row">
            {products.map((product) => (
              <div className="col-3" key={product.id}>
                <div className="product">
                  <div className="product-img">
                    <Link to={`/details/${product.id}`}>
                      <img src={`/img/${product.image}`}
                        className="img"
                        src={`/img/${product.image}`}
                        alt="img name"
                      />
                    </Link>
                  </div>
                  <div className="product__name">{product.name}</div>
                  <div className="row">
                    <div className="col-6">
                      <div className="product__price">
                        <span className="actualPrice">
                          {currencyFormatter.format(product.price, {
                            code: "USD",
                          })}
                        </span>
                        <span className="discount">{product.discount}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__discount__price">
                        {currencyFormatter.format(product.discountPrice, {
                          code: "USD",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Home1
