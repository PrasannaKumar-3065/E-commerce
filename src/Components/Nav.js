import Search from "./Search";
import img from "../images/cart.svg";

import { cartContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const { cart } = useContext(cartContext);
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
