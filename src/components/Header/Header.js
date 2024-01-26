import React from "react";
import "./Header.css";
import cartIcon from "../../images/cart.svg";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductsContext from "../../store/products-context";
const Header = () => {
  const searchCtx = useContext(ProductsContext);
  const cartCtx = useContext(CartContext);
  return (
    <header className="header">
      <h2 className="web-name">
        <Link to="/">Ecommerence</Link>
      </h2>
      <div className="tabsLinks">
        <NavLink to="/products/category/electronics">Electronics</NavLink>
        <NavLink to="/products/category/men's clothing">Mens Fashion</NavLink>
        <NavLink to="/products/category/women's clothing">
          Women's Fashion
        </NavLink>
        <NavLink to="/products/category/jewelery">Jewelery</NavLink>
      </div>
      <div className="">
        <input
          type="search"
          name=""
          className="headerSearch"
          id=""
          placeholder="Search"
          value={searchCtx.search}
          onChange={(e) => searchCtx.addSearch(e.target.value)}
        />
        <div className="searchIcon"></div>
      </div>
      <Link className="cartBtn" to="/cart">
        <div className="noInCarts">{cartCtx.items.length}</div>
        <div className="cartIcon">
          <img src={cartIcon} alt="" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
