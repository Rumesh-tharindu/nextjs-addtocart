import React from "react";
import "./productCard.scss";
const ProductCard = ({ product }: any) => {
  return (
    <div className="productCard">
      <div className="productCardInner">
        <div
          className="productCardHeader"
          style={{ backgroundImage: `url('${product.image}')` }}
        ></div>
        <div className="productCardFooter">
          <h5 className="productTitle">{product.product}</h5>
          <p>{product.category}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
