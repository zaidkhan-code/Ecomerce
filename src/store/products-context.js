import React from "react";

const ProductsContext = React.createContext({
    products:[],
    addProducts: (products)=>{},
    search:"",
    addSearch: (val)=>{}
});

export default ProductsContext;