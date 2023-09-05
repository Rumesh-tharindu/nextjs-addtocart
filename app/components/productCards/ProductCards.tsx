import React from "react";
import ProductCard from "./productCard/ProductCard";
import "./productCards.scss";
const ProductCards = ({ products }: any) => {
  return (
    <>
      <div className="productCards">
        {products.map((product: any, index: number) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductCards;
