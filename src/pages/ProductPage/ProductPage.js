import React from "react";
import "./ProductPage.css";
import Layout from "../../components/Layout/Layout";
import cart from "../../images/cart.svg";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductsContext from "../../store/products-context";
const ProductPage = () => {
  const params = useParams();
  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductsContext);
  const currentProductArr = productCtx.products.filter(
    (product) => product.id == params.productId
  );
  const currentProduct = currentProductArr[0];
  const addProductToCart = () => {
    cartCtx.addItem({
      id: currentProduct.id,
      amount: 1,
      price: currentProduct.price,
      name: currentProduct.title,
      image: currentProduct.image,
    });
  };
  return (
    <Layout>
      <div className="productPage">
        <div>
          <Link to="/">
            {" "}
            <button>Back</button>
          </Link>
          <div className="productDetails">
            <div className="productImg">
              <img src={currentProduct.image} alt="" />
            </div>
            <div className="productDescription">
              <h2>{currentProduct.title}</h2>
              <div>{currentProduct.category}</div>
              <p>{currentProduct.description}</p>
              <span>Price:</span>
              <span className="price">${currentProduct.price}</span>
              <div>
                <button className="addToCartBtn" onClick={addProductToCart}>
                  <span> Add to Cart</span> <img src={cart} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
