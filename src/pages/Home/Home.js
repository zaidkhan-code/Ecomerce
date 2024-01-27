import React from "react";
import "./Home.css";
import Layout from "../../components/Layout/Layout";
import ProductElement from "../../components/ProductElement/ProductElement";
import { useEffect } from "react";
import axios from "axios";
import { useContext, useState } from "react";
import ProductsContext from "../../store/products-context";
import { useParams } from "react-router-dom";
const Home = () => {
  const productCtx = useContext(ProductsContext);
  const params = useParams();
  const [products, setProducts] = useState([]);
  const category = params.categoryName;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        productCtx.addProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(category);
    category &&
      setProducts(
        productCtx.products.filter((product) => product.category === category)
      );
  }, [category]);

  return (
    <Layout>
      <div className="products">
        {category
          ? productCtx.search
            ? products
                .filter((product) => {
                  return product.title
                    .toLowerCase()
                    .includes(productCtx.search.toLowerCase());
                })
                .map((product) => {
                  return <ProductElement key={product.id} product={product} />;
                })
            : products.map((product) => {
                return <ProductElement product={product} />;
              })
          : productCtx.search
          ? productCtx.products
              .filter((product) => {
                return product.title
                  .toLowerCase()
                  .includes(productCtx.search.toLowerCase());
              })
              .map((product) => {
                return <ProductElement key={product.id} product={product} />;
              })
          : productCtx.products.map((product) => {
              return <ProductElement key={product.id} product={product} />;
            })}
      </div>
    </Layout>
  );
};

export default Home;
