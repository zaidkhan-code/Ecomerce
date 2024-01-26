import ProductsContext from "./products-context";
import React from "react";
import { useState } from "react";

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const addProductsToContextHandler = (productss) => {
    setProducts(productss);
  };
  const addSearchValues = (val) => {
    setSearch(val);
  };
  const contextData = {
    products: products,
    addProducts: addProductsToContextHandler,
    addSearch: addSearchValues,
    search: search,
  };
  return (
    <ProductsContext.Provider value={contextData}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
