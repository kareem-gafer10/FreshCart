import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ productList }) => {
  return (
    <div className="row">
      {productList.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
