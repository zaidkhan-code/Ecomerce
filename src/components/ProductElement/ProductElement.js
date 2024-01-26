import React from "react";
import "./ProductElement.css";
import cart from "../../images/cart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const ProductElement = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const addProductToCart = (item) => {
    cartCtx.addItem({
      id: item.id,
      amount: 1,
      price: item.price,
      name: item.title,
      image: item.image,
    });
  };
  return (
    <div className="productElement">
      <Link to={`/products/${product.id}`} className="productLink">
        <img src={product.image} alt="product pic" />
        <h3>{product.title}</h3>
        <div>{product.category}</div>
        <p className="productsDescription">{product.description}</p>
        <span>Price:</span>
        <span className="price">${product.price}</span>
      </Link>
      <div>
        <button
          className="addToCartBtn"
          onClick={() => addProductToCart(product)}
        >
          <span> Add to Cart</span> <img src={cart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductElement;
