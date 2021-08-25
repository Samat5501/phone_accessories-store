import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { BsFillBagFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import logo from './img/logo.jpg'


const Nav = () => {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    console.log(totalQuantities);
    return (
      <div className="navbar">
        <div className="container">
          <div className="nav__container">
            <div className="nav__left">
              <Link to="/">
                <img className="img-logo" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="nav__right">
              <Link to="/cart">
                <div className="basket">
                  <BsFillBagFill className="icon" />
                  <span>{totalQuantities}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Nav
