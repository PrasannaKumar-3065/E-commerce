import Search from "./Search";
import img from "../images/cart.svg";
import filter from "../images/filter.svg";
import { cartContext } from "../App";
import { useContext } from "react";
import {BrowserRouter as Switch, Link, Routes } from "react-router-dom";
import Products from "./Products";

const Nav = () => {
  const { cart, updateCart } = useContext(cartContext);
  return (
    <div className="nav">
      <div className="cart-div">
        <Link to={"/cart"}>
          <img className="cart" src={img} alt="Cart-Image" />
          <div className="badge">{cart.length}</div>
        </Link>
      </div>
      <Search>search</Search>
    </div>
  );
};

export default Nav;
