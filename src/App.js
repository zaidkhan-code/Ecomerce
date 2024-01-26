import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import ProductsProvider from "./store/ProductsProvider";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/products/:productId", element: <ProductPage /> },
    { path: "/cart", element: <Cart /> },
    { path: "/products/category/:categoryName", element: <Home /> },
  ]);
  return (
    <ProductsProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductsProvider>
  );
};

export default App;
