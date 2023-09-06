import ProductCards from "@/app/components/productCards/ProductCards";
import { fetchCategoryProducts } from "@/app/services/category";
import { useRouter } from "next/navigation";
import React from "react";

const getCategoryProducts = async (slug: String) => {
  const res = await fetchCategoryProducts(slug);

  return res;
};
const page = async ({ params }: any) => {
  const categoryProducts = await getCategoryProducts(params.slug);

  return (
    <div className="categories">
      <div className="container">
        <h3>{params.slug}</h3>
        <ProductCards products={categoryProducts} />
      </div>
    </div>
  );
};

export default page;
