import ProductCards from "@/app/components/productCards/ProductCards";

import { fetchProducts } from "@/app/services/shop";
import React from "react";

const getProducts = async () => {
  const res = await fetchProducts();
  return res;
};

const page = async () => {
  const products = await getProducts();

  return (
    <>
      <div className="products">
        <div className="container">
          <h3>All Results</h3>
          <ProductCards products={products} />
        </div>
      </div>
    </>
  );
};

export default page;
